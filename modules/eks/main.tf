################################################################################
# EKS Cluster
################################################################################

terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">=2.7"
    }
    tls = {
      source  = "hashicorp/tls"
      version = "~>3.0"
    }
  }
}

data "aws_eks_cluster" "cluster" {
  name = module.eks-cluster.cluster_id
}
data "aws_eks_cluster_auth" "cluster" {
  name = module.eks-cluster.cluster_id
}
data "aws_vpc" "vpc" {
  id = var.vpc_id
}

provider "kubernetes" {
  host                   = data.aws_eks_cluster.cluster.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority.0.data)
  token                  = data.aws_eks_cluster_auth.cluster.token
}

# Define users with admin permissions
data "aws_iam_group" "admin-members" {
  group_name = "admin-cluster"
}

locals {
  k8s_admins = [
    for user in data.aws_iam_group.admin-members.users :
    {
      userarn  = user.arn
      username = user.user_name
      groups   = ["system:masters"]
    }
  ]
  k8s_map_users = local.k8s_admins
}

# Create EKS cluster

module "eks-cluster" {
  source                          = "terraform-aws-modules/eks/aws"
  version                         = "~> 18.0"
  cluster_name                    = var.cluster_name
  cluster_version                 = var.cluster_version
  vpc_id                          = var.vpc_id
  subnet_ids                      = var.subnet_id
  cluster_endpoint_private_access = true
  cluster_endpoint_public_access  = true
  tags                            = var.tags
  manage_aws_auth_configmap       = true
  aws_auth_users                  = local.k8s_map_users
  enable_irsa                     = true

  node_security_group_additional_rules = {
    ingress_self_all = {
      description                   = "Allow all traffic between nodes"
      type                          = "ingress"
      protocol                      = "-1"
      from_port                     = 0
      to_port                       = 0
      source_cluster_security_group = true
    }
    ingress_vpc_all = {
      description = "Allow all traffic from VPC"
      type        = "ingress"
      protocol    = "-1"
      from_port   = 0
      to_port     = 0
      cidr_blocks = [data.aws_vpc.vpc.cidr_block]
    }
    egress_all = {
      description = "Node all egress"
      type        = "egress"
      protocol    = "-1"
      from_port   = 0
      to_port     = 0
      cidr_blocks = ["0.0.0.0/0"]
    }
  }

  eks_managed_node_group_defaults = {
    disk_size      = var.ng_disk_size
    instance_types = var.ng_instance_types
  }

  eks_managed_node_groups = merge(var.node_groups_map
    , {
      main = {
        description     = "Main node group"
        name            = var.cluster_name
        use_name_prefix = true
        min_size        = var.ng_min_size
        max_size        = var.ng_max_size
        desired_size    = var.ng_desired_size
        instance_types  = var.ng_instance_types
        capacity_type   = var.ng_capacity_type
        subnet_ids      = var.subnet_id

        labels = {
          node-role = "control-plane"
        }
        tags = {
          nodegroup = "main"
        }
      }
  })
}
/*
# Add Open Telemetry policy
resource "aws_iam_role_policy_attachment" "additional" {
  for_each   = module.eks-cluster.eks_managed_node_groups
  policy_arn = "arn:aws:iam::312395729448:policy/AWSDistroOpenTelemetryPolicy"
  role       = each.value.iam_role_name
}
*/
################################################################################
# EFS
################################################################################

resource "aws_efs_file_system" "efs" {
  creation_token = format("%s-EFS", var.cluster_name)
  encrypted      = true

  tags = merge(
    { "Name" = format("%s-EFS", var.cluster_name) },
    var.tags
  )
}
resource "aws_efs_mount_target" "efs_mounts" {
  count          = length(var.az_list)
  file_system_id = aws_efs_file_system.efs.id
  subnet_id      = slice(var.subnet_id, 0, length(var.az_list))[count.index]
}

################################################################################
# Configure local kubectl to use EKS cluster
################################################################################
locals {
  interpreter = substr(pathexpand("~"), 0, 1) == "/" ? ["/bin/bash", "-c"] : ["PowerShell", "-Command"]
}
resource "null_resource" "update_local_kubeconfig" {
  depends_on = [module.eks-cluster]

  provisioner "local-exec" {
    interpreter = local.interpreter
    command     = format("aws eks --region %s update-kubeconfig --name %s", var.aws_region, module.eks-cluster.cluster_id)
  }
}

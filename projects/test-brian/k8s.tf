################################################################################
# KUBERNETES PROVIDERS
################################################################################
data "aws_eks_cluster" "cluster" {
  name = module.eks.cluster_id
}

data "aws_eks_cluster_auth" "cluster" {
  name = module.eks.cluster_id
}

provider "kubernetes" {
  host                   = data.aws_eks_cluster.cluster.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority.0.data)
  token                  = data.aws_eks_cluster_auth.cluster.token
}

provider "helm" {
  repository_config_path = "${path.module}/.helm/repositories.yaml"
  repository_cache       = "${path.module}/.helm"
  kubernetes {
    host                   = data.aws_eks_cluster.cluster.endpoint
    cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority.0.data)
    token                  = data.aws_eks_cluster_auth.cluster.token
  }
}

################################################################################
# EKS Deployments
################################################################################
module "eks-deployments" {
  depends_on = [ module.eks ]
  # source   = "REFERENCE"
  source = "../../modules/eks-deployments"

  aws_region   = var.aws_region
  cluster_name = module.eks.cluster_id
  namespaces   = var.eks_namespaces
  efs_id       = module.eks.efs_id
}

module "eks-alb" {
   #source = "REFERENCE"
   source = "../../modules/eks-alb"

   aws_region       = var.aws_region
   cluster_name     = module.eks.cluster_id
   cluster_oidc_url = module.eks.cluster_oidc_url
}

################################################################################
# Secret Manager
################################################################################
/*
locals {
  secret_data = {
    db_username          = "master"
    db_password          = module.rds.admin_pass
    db_url               = "jdbc:postgresql://${module.rds.heimdall_dns}:5432/${var.rds_db_name}"
    db_backendportal_url = "jdbc:postgresql://${module.rds.heimdall_dns}:5432/backend_portal"
    redis_host           = module.redis.nodes_address.0.address
    redis_port           = module.redis.nodes_address.0.port
    aws_rabbit_host      = split(":", split("://", module.rabbitmq.endpoints[0])[1])[0]
    aws_rabbit_port      = split(":", split("://", module.rabbitmq.endpoints[0])[1])[1]
    aws_rabbit_user      = "admin"
    aws_rabbit_password  = module.rabbitmq.admin_pass
    application_domain   = module.cloudfront.domain_name
  }
}

module "secrets" {
  # source = "git@test-github.corp.globant.com:ISTEA/Terraform-Scripts.git//modules/secret-manager?ref=devops_latam"
  source = "../../modules/secret-manager"
  name       = var.sm_name
  namespaces = var.eks_namespaces
  cluster_name = var.eks_cluster_name

  admin_secret_data = local.secret_data
  ns_secret_data    = local.secret_data
}

*/
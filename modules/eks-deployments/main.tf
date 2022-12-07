################################################################################
# K8s configs and deploys
################################################################################

terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">=2.7"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "2.4.0"
    }
  }
}

locals {
  is_bash     = substr(pathexpand("~"), 0, 1) == "/" ? 1 : 0
  is_ps       = substr(pathexpand("~"), 0, 1) == "/" ? 0 : 1
  interpreter = substr(pathexpand("~"), 0, 1) == "/" ? ["/bin/bash", "-c"] : ["PowerShell", "-Command"]

  eks_addon_map = {
    "us-west-1"      = "602401143452.dkr.ecr.us-west-1.amazonaws.com"
    "us-west-2"      = "602401143452.dkr.ecr.us-west-2.amazonaws.com"
  }
}

# Install AWS EFS driver
data "aws_iam_policy" "efs_iam_policy" {
  name = "AmazonEKS_EFS_CSI_Driver_Policy"
}
resource "null_resource" "efs_create_iam_role" {
  triggers = {
    cluster_name = var.cluster_name
    aws_region   = var.aws_region
  }

  provisioner "local-exec" {
    interpreter = local.interpreter
    command     = format("eksctl create iamserviceaccount --name efs-csi-controller-sa --namespace kube-system --cluster %s --attach-policy-arn %s --approve --override-existing-serviceaccounts --region %s", var.cluster_name, data.aws_iam_policy.efs_iam_policy.arn, var.aws_region)
  }

  provisioner "local-exec" {
    when        = destroy
    interpreter = substr(pathexpand("~"), 0, 1) == "/" ? ["/bin/bash", "-c"] : ["PowerShell", "-Command"]
    command     = format("eksctl delete iamserviceaccount --name efs-csi-controller-sa --namespace kube-system --cluster %s --region %s", self.triggers.cluster_name, self.triggers.aws_region)
  }
}
/*
Pending: create service account using kubernetes provider (replacing the current null_resource)
References:
https://eksctl.io/usage/iamserviceaccounts/
https://stackoverflow.com/questions/65934606/what-does-eksctl-create-iamserviceaccount-do-under-the-hood-on-an-eks-cluster
https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html
https://docs.aws.amazon.com/eks/latest/userguide/create-service-account-iam-policy-and-role.html
https://docs.aws.amazon.com/eks/latest/userguide/specify-service-account-role.html
https://aws.amazon.com/es/blogs/opensource/introducing-fine-grained-iam-roles-service-accounts/
https://stackoverflow.com/questions/64246111/how-to-assign-aws-iam-role-to-service-account-with-terraform
*/
resource "helm_release" "aws_efs_driver_install" {
  depends_on = [null_resource.efs_create_iam_role]
  chart      = "aws-efs-csi-driver"
  name       = "aws-efs-csi-driver"
  repository = "https://kubernetes-sigs.github.io/aws-efs-csi-driver/"
  namespace  = "kube-system"

  set {
    name  = "image.repository"
    value = "${local.eks_addon_map[var.aws_region]}/eks/aws-efs-csi-driver"
  }
  set {
    name  = "controller.serviceAccount.create"
    value = "false"
  }
  set {
    name  = "controller.serviceAccount.name"
    value = "efs-csi-controller-sa"
  }
}

# Install Metrics Server
locals {
  metrics_server_yaml_files = [
    "service_account.yaml",
    "rbac_clusterrole_reader.yaml",
    "rbac_clusterrole_system.yaml",
    "rbac_rolebinding.yaml",
    "rbac_cluster_rolebinding_delegator.yaml",
    "rbac_cluster_rolebinding_system.yaml",
    "service.yaml",
    "deployment.yaml",
    "api_service.yaml"
  ]
}
resource "kubernetes_manifest" "install_metrics_server" {
  count    = length(local.metrics_server_yaml_files)
  manifest = yamldecode(file("${path.module}/resources/metrics_server/${element(local.metrics_server_yaml_files, count.index)}"))
}

# Install Argo-rollouts
resource "kubernetes_namespace" "argo_ro_create_namespace" {
  metadata {
    name = "argo-rollouts"
  }
}
/* # Documents with kind: CustomResourceDefinition are not yet supported by kubernetes provider
# locals {
#   argo_ro_yaml_files = [
#     "01_custom_def_01.yaml",
#     "02_custom_def_02.yaml",
#     "03_custom_def_03.yaml",
#     "04_custom_def_04.yaml",
#     "05_custom_def_05.yaml",
#     "06_serviceaccount.yaml",
#     "07_clusterrole_01.yaml",
#     "08_clusterrole_02.yaml",
#     "09_clusterrole_03.yaml",
#     "10_clusterrole_04.yaml",
#     "11_rolebinding.yaml",
#     "12_secret.yaml",
#     "13_service.yaml",
#     "14_deployment.yaml"
#   ]
# }
# resource "kubernetes_manifest" "argo_ro_install" {
#   depends_on = [kubernetes_namespace.argo_ro_create_namespace]
#   count = length(local.argo_ro_yaml_files)
#   manifest = yamldecode(file("${path.module}/resources/argo_ro/${element(local.argo_ro_yaml_files, count.index)}"))
# }
*/
resource "null_resource" "argo_ro_install" {
  depends_on = [kubernetes_namespace.argo_ro_create_namespace]

  provisioner "local-exec" {
    interpreter = local.interpreter
    command     = "kubectl apply -n argo-rollouts -f ${path.module}/resources/argo_ro/argo_ro_install_all.yml"
  }
}

# Install Argo CD
resource "kubernetes_namespace" "argo_cd_create_namespace" {
  metadata {
    name = "argocd"
  }
}
resource "null_resource" "argo_cd_install" {
  depends_on = [kubernetes_namespace.argo_cd_create_namespace]

  provisioner "local-exec" {
    interpreter = local.interpreter
    command     = "kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml"
  }
}

# Create amazon-cloudwatch namespace
resource "kubernetes_namespace" "cloudwatch_create_namespace" {
  metadata {
    name = "amazon-cloudwatch"
  }
}

# Install CloudWatch agent
locals {
  cloudwatch_agent_yaml_files = [
    "01_service_account.yaml",
    "02_cluster_role.yaml",
    "03_cluster_role_binding.yaml",
    "04_cloudwatch_agent_daemonset.yaml"
  ]
}
resource "kubernetes_config_map" "cloudwatch_configmap" {
  depends_on = [kubernetes_namespace.cloudwatch_create_namespace]
  metadata {
    name      = "cwagentconfig"
    namespace = "amazon-cloudwatch"
  }
  data = {
    "cwagentconfig.json" = jsonencode({
      logs = {
        metrics_collected = {
          kubernetes = {
            cluster_name                = var.cluster_name
            metrics_collection_interval = 60
          }
        }
        force_flush_interval = 5
      }
    })
  }
}
resource "kubernetes_manifest" "cloudwatch_agent_install" {
  depends_on = [kubernetes_config_map.cloudwatch_configmap]
  count      = length(local.cloudwatch_agent_yaml_files)
  manifest   = yamldecode(file("${path.module}/resources/cloudwatch/${element(local.cloudwatch_agent_yaml_files, count.index)}"))
}

#Install CSI Driver
resource "helm_release" "secrets_install" {
  depends_on = [null_resource.efs_create_iam_role]
  chart      = "secrets-store-csi-driver"
  name       = "csi-secrets-store"
  repository = "https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts/"
  namespace  = "kube-system"
  #--set syncSecret.enabled=true  --set enableSecretRotation=true
  set {
    name  = "syncSecret.enabled"
    value = "true"
  }
  set {
    name  = "enableSecretRotation"
    value = "true"
  }
}
locals {
  secrets_yaml_files = [
    "01_service_account.yaml",
    "02_cluster_role.yaml",
    "03_cluster_role_binding.yaml",
    "04_daemonset.yaml"
  ]
}
resource "kubernetes_manifest" "secrets_install" {
  depends_on = [helm_release.secrets_install]
  count      = length(local.secrets_yaml_files)
  manifest   = yamldecode(file("${path.module}/resources/secrets_store/${element(local.secrets_yaml_files, count.index)}"))
}

resource "kubernetes_namespace" "eks_namespaces" {
  count = length(var.namespaces)
  metadata {
    name = var.namespaces[count.index]
  }
}

# # Persistent Volume
resource "kubernetes_manifest" "storage_class" {
  manifest = yamldecode(templatefile("${path.module}/resources/persistent_volume/storageclass.yaml", { var_fsId = var.efs_id }))
}

resource "kubernetes_manifest" "persistent_volume" {
  depends_on = [kubernetes_manifest.storage_class]
  manifest   = yamldecode(templatefile("${path.module}/resources/persistent_volume/pv.yaml", { var_fsId = var.efs_id }))
}

resource "kubernetes_manifest" "persistent_volume_claim" {
  depends_on = [kubernetes_manifest.persistent_volume]
  manifest   = yamldecode(file("${path.module}/resources/persistent_volume/claim.yaml"))
}
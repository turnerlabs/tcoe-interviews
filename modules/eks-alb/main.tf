################################################################################
# Cluster access
################################################################################

terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">=2.7"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "2.4.0" #version = ">=2.4"
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

# Install ALB controller
data "aws_iam_policy" "alb_iam_policy" {
  name = "AWSLoadBalancerControllerIAMPolicy"
}
resource "null_resource" "alb_serviceaccount" {
  triggers = {
    cluster_name = var.cluster_name
    aws_region   = var.aws_region
  }

  provisioner "local-exec" {
    interpreter = local.interpreter
    command     = format("eksctl create iamserviceaccount --cluster=%s --region=%s --namespace=kube-system --name=aws-load-balancer-controller --attach-policy-arn=%s --override-existing-serviceaccounts --approve", var.cluster_name, var.aws_region, data.aws_iam_policy.alb_iam_policy.arn)
  }

  provisioner "local-exec" {
    when    = destroy
    command = format("eksctl delete iamserviceaccount --cluster=%s --region=%s --namespace=kube-system --name=aws-load-balancer-controller", self.triggers.cluster_name, self.triggers.aws_region)
  }
}
resource "helm_release" "helm_alb_install" {
  depends_on = [null_resource.alb_serviceaccount]
  chart      = "aws-load-balancer-controller"
  name       = "aws-load-balancer-controller"
  repository = "https://aws.github.io/eks-charts"
  namespace  = "kube-system"

  set {
    name  = "clusterName"
    value = var.cluster_name
  }
  set {
    name  = "image.repository"
    value = "${local.eks_addon_map[var.aws_region]}/amazon/aws-load-balancer-controller"
  }
  set {
    name  = "serviceAccount.create"
    value = "false"
  }
  set {
    name  = "serviceAccount.name"
    value = "aws-load-balancer-controller"
  }
}
resource "null_resource" "helm_alb_waiter" {
  depends_on = [helm_release.helm_alb_install]
  provisioner "local-exec" {
    interpreter = local.interpreter
    command     = "sleep 300"
  }
}
resource "kubernetes_service" "argocd_nlb" {
  depends_on = [null_resource.helm_alb_waiter]
  metadata {
    annotations = {
      "service.beta.kubernetes.io/aws-load-balancer-nlb-target-type" = "instance"
      "service.beta.kubernetes.io/aws-load-balancer-scheme"          = "internet-facing"
      "service.beta.kubernetes.io/aws-load-balancer-name"            = "${lower(var.cluster_name)}-argocd-nlb"
    }
    labels = {
      "app" = "argogrpc"
    }
    name      = "argogrpc"
    namespace = "argocd"
  }
  spec {
    port {
      port        = 443
      target_port = 8080
      protocol    = "TCP"
      name        = "443"
    }
    selector = {
      "app.kubernetes.io/name" = "argocd-server"
    }
    session_affinity    = "None"
    type                = "LoadBalancer"
    load_balancer_class = "service.k8s.aws/nlb"
  }
}
provider "aws" {
  region                   = "us-east-1"
  shared_config_files      = [var.aws_config_file]
  shared_credentials_files = [var.aws_credentials_file]
  profile                  = var.aws_profile
  default_tags {
    tags = {
      Environment = "prd"
      ManagedBy   = "terraform"
    }
  }
}

data "aws_eks_cluster" "this" {
  name = module.eks.cluster_id
}

provider "kubectl" {
  host                   = data.aws_eks_cluster.this.endpoint
  cluster_ca_certificate = base64decode(module.eks.cluster_ca_certificate)
  load_config_file       = false
  exec {
    api_version = "client.authentication.k8s.io/v1alpha1"
    args        = ["eks", "get-token", "--cluster-name", data.aws_eks_cluster.this.name]
    command     = "aws"
  }
}

provider "helm" {
  kubernetes {
    host                   = data.aws_eks_cluster.this.endpoint
    cluster_ca_certificate = base64decode(module.eks.cluster_ca_certificate)
    exec {
      api_version = "client.authentication.k8s.io/v1alpha1"
      args        = ["eks", "get-token", "--cluster-name", data.aws_eks_cluster.this.name]
      command     = "aws"
    }
  }
}

terraform {
    required_version = ">= 1.1.9"

    required_providers {
        aws = {
            source  = "hashicorp/aws"
            version = "~> 4.2.0"
        }
        helm = {
            source = "hashicorp/helm"
            version = "= 2.5.1"
        }
        kubectl = {
            source  = "gavinbunney/kubectl"
            version = ">= 1.14.0"
        }
    }
}

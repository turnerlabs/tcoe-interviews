terraform {
  required_version = ">= 1.1.7"
  required_providers {
    kubectl = {
      source = "gavinbunney/kubectl"
      version = ">= 1.7.0"
    }
  }
}
################################################################################
# PROJECT VARIABLES
################################################################################
variable "aws_region" {
  description = "Region to be used on AWS for the project (defaults to Virginia)"
  type        = string
  default     = "us-east-1"
}

# VPC
variable "vpc_name" {
  description = "Name of the VPC resources"
  type        = string
}
variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
}
variable "vpc_subs_az" {
  description = "Availability Zone for the subnets (defaults to Virginia A and B)"
  type        = list(string)
  default     = ["us-east-1a", "us-east-1b"]
}
variable "vpc_cidr_app" {
  description = "CIDR block for the Public Subnet - APP"
  type        = list(string)
}
variable "vpc_cidr_shared" {
  description = "CIDR block for the Public Subnet - SHARE"
  type        = list(string)
}
variable "vpc_cidr_lb" {
  description = "CIDR block for the Private Subnet - LB"
  type        = list(string)
}
variable "vpc_cidr_data" {
  description = "CIDR block for the Private Subnet - DATA"
  type        = list(string)
}
variable "tags_vpc" {
  description = "Tags for the resources"
  type        = map(map(string))
  default = {
    tags_public  = {}
    tags_private = {}
  }
}
variable "tags" {
  description = "Tags for the resources"
  type        = map(string)
  default     = {}
}

# EKS
variable "eks_cluster_name" {
  description = "Name of the EKS Cluster"
  type        = string
}
variable "eks_main_ng" {
  description = "Map for the main node group"
  default = {
    ng_instance_types = ["t3.small"]
    ng_disk_size      = 20
    ng_min_size       = 1
    ng_max_size       = 3
    ng_desired_size   = 1
    ng_capacity_type  = "ON_DEMAND"
  }
}
variable "eks_node_groups_map" {
  description = "EKS Node groups map"
  #type        = map(map(any))
  default = {
    extra = {
      capacity_type = "SPOT"
      instance_types = [
        "m5.large", "m4.large", "t3.large"
      ]
      desired_size = 1
      min_size     = 1
      max_size     = 3
    }
  }
}
variable "eks_namespaces" {
  description = "EKS namespaces to be created"
  type        = list(string)
  default     = []
}

# CloudFront
variable "cf_name" {
  description = "Name for CloudFront"
  type        = string
}
variable "cf_bucket_name" {
  description = "Bucket name for CloudFront"
  type        = string
}
variable "name_cf_policy" {
  description = "Name for CloudFront policy"
  type        = string
}

################################################################################
# VARIABLES
################################################################################
variable "aws_region" {
  description = "Region to be used on AWS for the project (defaults to Virginia)"
  type        = string
  default     = "us-east-1"
}
variable "cluster_name" {
  description = "Name of the EKS Cluster"
  type        = string
}
variable "cluster_version" {
  description = "Kubernetes version to be used by the cluster"
  type        = string
  default     = "1.22"
}
variable "vpc_id" {
  description = "VPC ID"
  type        = string
}
variable "subnet_id" {
  description = "IDs of the subnets to be used by the cluster"
  type        = list(string)
}
variable "az_list" {
  description = "List of AZs"
  type        = list(string)
}
variable "node_groups_map" {
  description = "EKS Node groups map"
  default = {
    extra = {
      capacity_type    = "SPOT"
      instance_types   = ["c5.4xlarge", "c5a.4xlarge"]
      desired_capacity = 5
      desired_size     = 3
      min_capacity     = 3
      max_capacity     = 10
    }
  }
}
variable "tags" {
  description = "Tags for the EKS resources"
  type        = map(string)
  default     = {}
}

# MAIN NODE GROUP
variable "ng_instance_types" {
  description = "Instance types for the main nodes"
  type        = list(string)
  default     = ["t3.small"]
}
variable "ng_disk_size" {
  description = "Default disk size for the main nodes"
  type        = number
  default     = 20
}
variable "ng_min_size" {
  description = "Minimum amount of main nodes"
  type        = number
  default     = 1
}
variable "ng_max_size" {
  description = "Maximum amount of main nodes"
  type        = number
  default     = 4
}
variable "ng_desired_size" {
  description = "Desired amount of main nodes"
  type        = number
  default     = 1
}
variable "ng_capacity_type" {
  description = "Type of main nodes: SPOT or ON_DEMAND"
  type        = string
  default     = "ON_DEMAND"
}

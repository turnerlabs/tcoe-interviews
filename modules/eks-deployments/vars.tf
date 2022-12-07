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

variable "namespaces" {
  description = "Namespaces to be created"
  type        = list(string)
  default     = []
}

variable "efs_id" {
  description = "ID of the EFS filesystem"
  type        = string
}

variable "name_key_parameter" {
  description = "Name of key sealed in ssm"
  type        = string
  default     = "Argocd-sealed"
}
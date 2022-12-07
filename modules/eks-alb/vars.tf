################################################################################
# VARIABLES
################################################################################
variable "aws_region" {
  description = "Region to be used on AWS for the project (defaults to Virginia)"
  type        = string
  default     = "us-east-1"
}
variable "cluster_name" {
  description = "ID of the EKS Cluster"
  type        = string
}
variable "cluster_oidc_url" {
  description = "Cluster's OIDC url"
  type        = string
}
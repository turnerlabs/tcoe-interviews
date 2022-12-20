variable "account_id" {
  description = "AWS account id"
  type        = string
}

variable "env" {
  description = "Environment prefix for name convension"
  type        = string
  default     = "prd"
}

variable "vpc_cidr" {
  description = "VPC CIDR"
  type        = string
  default     = "10.200.0.0/16"
}

variable "public_sub_1" {
  description = "Public Subnet IP segment"
  type        = string
  default     = "10.200.64.0/20"
}

variable "public_sub_2" {
  description = "Public Subnet IP segment"
  type        = string
  default     = "10.200.80.0/20"
}

variable "public_sub_3" {
  description = "Public Subnet IP segment"
  type        = string
  default     = "10.200.96.0/20"
}

variable "private_sub_1" {
  description = "Private Subnet IP segment"
  type        = string
  default     = "10.200.0.0/20"
}

variable "private_sub_2" {
  description = "Private Subnet IP segment"
  type        = string
  default     = "10.200.16.0/20"
}

variable "private_sub_3" {
  description = "Private Subnet IP segment"
  type        = string
  default     = "10.200.32.0/20"
}

variable "acm_org_com" {
  description = "ACM certificate ID"
  type        = string
}

variable "OIDC_PROVIDER" {
  type = string
}

variable "hosted_zone_id" {
  type = string
}

variable "domain" {
  type = string
}

variable "bucket_key" {
  type = string
}

variable "bucket_name" {
  description = "The AWS S3 bucket name"
  type        = string
}
variable "aws_config_file" {
  description = "The AWS config file"
  type        = string
}
variable "aws_credentials_file" {
  description = "The AWS credentials file"
  type        = string
}
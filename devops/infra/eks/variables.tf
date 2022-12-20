variable "account_id" {
  type = string
}

variable "environment" {
  type = string
}

variable "vpc_cidr" {
  type = string
}

variable "vpc_id" {
  type = string
}

variable "public_sub_1_id" {
  type = string
}

variable "public_sub_2_id" {
  type = string
}

variable "public_sub_3_id" {
  type = string
}

variable "private_sub_1_id" {
  type = string
}

variable "private_sub_2_id" {
  type = string
}

variable "private_sub_3_id" {
  type = string
}

variable "tags" {
  description = "A map of tags to add to all resources"
  type        = map(string)
  default = {
    Owners         = "DevOps"
    Purpose        = "Infrastructure administration"
    Relationship   = "All services by environment"
    Backup         = "False"
    Critical       = "High"
    DataProtection = "No"
  }
}

variable "acm_org_com" {
  type = string
}

variable "OIDC_PROVIDER" {
  type = string
}

variable "hosted_zone_id" {
  type = string
}

variable "admin_user" {
  type = string
}

variable "domain" {
  type = string
}
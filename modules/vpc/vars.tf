################################################################################
# VARIABLES
################################################################################
variable "name" {
  description = "Name of the VPC resources"
  type        = string
}
variable "cidr" {
  description = "CIDR block for the VPC"
  type        = string
}
variable "cidr_app" {
  description = "CIDR block for the Public Subnet - APP"
  type        = list(string)
}
variable "cidr_shared" {
  description = "CIDR block for the Public Subnet - SHARE"
  type        = list(string)
}
variable "cidr_lb" {
  description = "CIDR block for the Private Subnet - LB"
  type        = list(string)
}
variable "cidr_data" {
  description = "CIDR block for the Private Subnet - DATA"
  type        = list(string)
}
variable "subs_az" {
  description = "Availability Zone for the subnets"
  type        = list(string)
}
variable "tags" {
  description = "Tags for the VPC resources"
  type        = map(string)
  default     = {}
}

variable "tags_subs" {
  description = "Tags for the VPC subnets"
  type        = map(map(string))
  default = {
    tags_public  = {}
    tags_private = {}
  }
}

variable "cluster_name" {
  description = "Name of the EKS Cluster"
  type        = string
}

variable "nacl_inbound_data" {
  description = "Nacl inbound of private subnet data"
  type        = list(map(string))
  default     = [{ egress_enable : false, rule_number : 1, protocol : "-1", rule_action : "allow", cidr_block = "0.0.0.0/0" }]
}

variable "nacl_outbound_data" {
  description = "Nacl outbound of private subnet data"
  type        = list(map(string))
  default     = [{ egress_enable : true, rule_number : 1, protocol : "-1", rule_action : "allow", cidr_block = "0.0.0.0/0" }]
}

variable "nacl_inbound_app" {
  description = "Nacl inbound of private subnet app"
  type        = list(map(string))
  default     = [{ egress_enable : false, rule_number : 1, protocol : "-1", rule_action : "allow", cidr_block = "0.0.0.0/0" }]
}

variable "nacl_outbound_app" {
  description = "Nacl outbound of private subnet app"
  type        = list(map(string))
  default     = [{ egress_enable : true, rule_number : 1, protocol : "-1", rule_action : "allow", cidr_block = "0.0.0.0/0" }]
}


variable "nacl_inbound_shared" {
  description = "Nacl inbound of private subnet shared"
  type        = list(map(string))
  default     = [{ egress_enable : false, rule_number : 1, protocol : "-1", rule_action : "allow", cidr_block = "0.0.0.0/0" }]
}

variable "nacl_outbound_shared" {
  description = "Nacl outbound of private subnet shared"
  type        = list(map(string))
  default     = [{ egress_enable : true, rule_number : 1, protocol : "-1", rule_action : "allow", cidr_block = "0.0.0.0/0" }]
}

variable "nacl_inbound_lb" {
  description = "Nacl inbound of private subnet lb"
  type        = list(map(string))
  default     = [{ egress_enable : false, rule_number : 1, protocol : "-1", rule_action : "allow", cidr_block = "0.0.0.0/0" }]
}

variable "nacl_outbound_lb" {
  description = "Nacl outbound of private subnet lb"
  type        = list(map(string))
  default     = [{ egress_enable : true, rule_number : 1, protocol : "-1", rule_action : "allow", cidr_block = "0.0.0.0/0" }]
}

variable "nacl_inbound_test" {
  description = "Nacl inbound of private subnet test"
  type        = list(map(string))
  default     = [{ egress_enable : false, rule_number : 1, protocol : "-1", rule_action : "allow", cidr_block = "0.0.0.0/0" }]
}

variable "nacl_outbound_test" {
  description = "Nacl outbound of private subnet test"
  type        = list(map(string))
  default     = [{ egress_enable : true, rule_number : 1, protocol : "-1", rule_action : "allow", cidr_block = "0.0.0.0/0" }]
}

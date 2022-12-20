variable "environment" {
    type = string
}

variable "vpc_cidr" {
    type = string
}

variable "public_sub_1" {
    type = string
}

variable "public_sub_2" {
    type = string
}

variable "public_sub_3" {
    type = string
}

variable "private_sub_1" {
    type = string
}

variable "private_sub_2" {
    type = string
}

variable "private_sub_3" {
    type = string
}

variable "subnet_cidr_bits" {
  type        = number
  default     = 4
}


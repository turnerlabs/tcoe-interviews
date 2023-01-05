variable "my_access_key" {
  description = "Access-key-for-AWS"
  default     = "no_access_key_value_found"
}

variable "my_secret_key" {
  description = "Secret-key-for-AWS"
  default     = "no_secret_key_value_found"
}

variable "region" {
  description = "Region-for-AWS"
  default     = "no_region_value_found"
}

variable "origin_id" {
  description = "origin_id"
  default     = "no_origin_id_found"
}

variable "s3_endpoint" {
  default = "no_s3_endpoint_found"
}

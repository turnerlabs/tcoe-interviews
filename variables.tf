variable "region" {
  type        = string
  description = "AWS Region"
}

variable "app_name" {
  type        = string
  description = "Application Name"
}

variable "s3_origin_id" {
  type        = string
  description = "S3 bucket Origin ID for Cloudfront"
}
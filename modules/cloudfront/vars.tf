################################################################################
# VARIABLES
################################################################################
variable "name" {
  description = "Name of the CloudFront distribution"
  type        = string
}
variable "bucket_name" {
  description = "Name of the S3 bucket that will be used as origin for CDN"
  type        = string
  default     = "devops-tf-backend-test"
}
variable "price_class" {
  description = "Price classes provide you an option to lower the prices you pay to deliver content out of Amazon CloudFront"
  type        = string
  default     = "PriceClass_All"
}
variable "tags" {
  description = "Tags for the resources"
  default     = {}
}

variable "name_cf_policy" {
  description = "Name of headers policy to cloudfront"
  type        = string
  default     = "example-headers-policy"
}

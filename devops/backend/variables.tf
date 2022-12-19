variable "allowed_account_id" {
  description = "The AWS account id"
  type        = string
}
variable "key_admin" {
  description = "The AWS account username of the encryption KMS key administrator"
  type        = string
}
variable "aws_profile" {
  description = "The AWS user profile"
  type        = string
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

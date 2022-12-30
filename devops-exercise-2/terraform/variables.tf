variable "bucket_name" {
  type        = string
  description = "The name of the bucket."
}

variable "key_path" {
  type        = string
  description = "Path to the state file inside the S3 Bucket."
}

variable "region" {
  type        = string
  description = "AWS Region of the resource."
}

variable "bool_true" {
  type        = bool
  default     = true
  description = "A boolean value that represent a true conditional."
}

variable "bool_false" {
  type        = bool
  default     = true
  description = "A boolean value that represent a false conditional."
}

variable "dynamodb_table_name" {
  type        = string
  description = "Unique within a region name of the table."
}

variable "bucket_acl" {
  type        = string
  description = "The canned ACL to apply to the bucket."
}

variable "bucket_versioning_status" {
  type        = string
  description = "The versioning state of the bucket."
}

variable "dynamodb_read_capacity" {
  type        = string
  description = "Number of read units for this table."
}

variable "dynamodb_write_capacity" {
  type        = string
  description = " Number of write units for this index."
}

variable "dynamodb_hash_key" {
  type        = string
  description = "Attribute to use as the hash (partition) key."
}

variable "dynamodb_attribute_name" {
  type        = string
  description = "Name of the attribute."
}

variable "dynamodb_attribute_type" {
  type        = string
  description = "Attribute type."
}

variable "iam_policy_lambda_name" {
  type        = string
  description = "The name of the policy."
}

variable "iam_policy_lambda_path" {
  type        = string
  description = "Path in which to create the policy."
}

variable "iam_policy_lambda_description" {
  type        = string
  default     = "IAM policy for enable CloudWatch logging from a lambda function."
  description = "Description of the IAM policy."
}

variable "iam_role_lambda_name" {
  type        = string
  description = "Friendly name of the role."
}

variable "iam_role_lambda_description" {
  type        = string
  default     = "IAM role for Assume Role."
  description = "Description of the role."
}

variable "cloudwatch_lambda_name" {
  type        = string
  description = "The name of the log group."
}

variable "cloudwatch_lambda_retention" {
  type        = string
  description = "Specifies the number of days you want to retain log events in the specified log group."
}

variable "lambda_package_type" {
  type        = string
  description = "The type of archive to generate."
}

variable "lambda_package_source_file" {
  type        = string
  description = "Package this file into the archive."
}

variable "lambda_package_output_path" {
  type        = string
  description = "The output of the archive file."
}

variable "lambda_function_name" {
  type        = string
  description = "Unique name for your Lambda Function."
}

variable "lambda_function_filename" {
  type        = string
  description = "Path to the function's deployment package within the local filesystem."
}

variable "lambda_function_runtime" {
  type        = string
  description = "Identifier of the function's runtime."
}

variable "lambda_function_handler" {
  type        = string
  description = "Function entrypoint in your code."
}

variable "lambda_function_timeout" {
  type        = string
  description = "Amount of time your Lambda Function has to run in seconds."
}

variable "api_gateway_name" {
  type        = string
  description = "Name of the REST API."
}

variable "api_gateway_endpoint_configuration_type" {
  type        = list(any)
  description = "List of endpoint types. "
}

variable "api_gateway_stage_name" {
  type        = string
  description = "Name of the stage."
}

variable "api_gateway_path" {
  type        = string
  description = "Set to the path relative to the parent Resource."
}

variable "api_gateway_authorization" {
  type        = string
  description = "Type of authorization used for the method."
}

variable "api_gateway_http_method" {
  type        = string
  description = "HTTP Method."
}

variable "api_gateway_integration_http_method" {
  type        = string
  description = "Integration HTTP method."
}

variable "api_gateway_integration_type" {
  type        = string
  description = "Integration input's type."
}
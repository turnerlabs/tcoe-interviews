output "bucket_name" {
  description = "Name of the S3 bucket."
  value       = aws_s3_bucket.s3_bucket.id
}

output "bucket_arn" {
  description = "Arn of the S3 bucket."
  value       = aws_s3_bucket.s3_bucket.arn
}

output "dynamodb_table" {
  description = "Unique within a region name of the table."
  value       = aws_dynamodb_table.dynamodb.id
}

output "dynamodb_arn" {
  description = "Arn of the DynamoDB table."
  value       = aws_dynamodb_table.dynamodb.arn
}

output "lambda_arn" {
  description = "Amazon Resource Name (ARN) identifying your Lambda Function."
  value       = aws_lambda_function.lambda.arn
}

output "lambda_invoke_arn" {
  description = "ARN to be used for invoking Lambda Function from API Gateway"
  value       = aws_lambda_function.lambda.invoke_arn
}

output "lambda_last_modified" {
  description = "Date this resource was last modified."
  value       = aws_lambda_function.lambda.last_modified
}

output "lambda_version" {
  description = "Latest published version of your Lambda Function."
  value       = aws_lambda_function.lambda.version
}

output "apigateway_execution_arn" {
  description = "Arn of the API Gateway."
  value       = aws_api_gateway_rest_api.gateway.execution_arn
}

output "apigateway_base_url" {
  description = "URL to invoke the API pointing to the stage."
  value       = aws_api_gateway_deployment.deployment.invoke_url
}

output "apigateway_call_url" {
  description = "URL to invoke the API pointing to the stage and resource path."
  value       = "${aws_api_gateway_deployment.deployment.invoke_url}${aws_api_gateway_stage.stage.stage_name}/${aws_api_gateway_resource.resource.path_part}"
}
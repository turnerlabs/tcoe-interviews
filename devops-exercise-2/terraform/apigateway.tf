
resource "aws_api_gateway_rest_api" "gateway" {
  name = var.api_gateway_name

  endpoint_configuration {
    types = var.api_gateway_endpoint_configuration_type
  }
}

resource "aws_api_gateway_deployment" "deployment" {
  rest_api_id = aws_api_gateway_rest_api.gateway.id

  depends_on = [
    aws_api_gateway_method.method,
    aws_api_gateway_integration.lambda
  ]
}

resource "aws_api_gateway_stage" "stage" {
  deployment_id = aws_api_gateway_deployment.deployment.id
  rest_api_id   = aws_api_gateway_rest_api.gateway.id
  stage_name    = var.api_gateway_stage_name
}

resource "aws_api_gateway_resource" "resource" {
  parent_id   = aws_api_gateway_rest_api.gateway.root_resource_id
  rest_api_id = aws_api_gateway_rest_api.gateway.id
  path_part   = var.api_gateway_path
}

resource "aws_api_gateway_method" "method" {
  resource_id   = aws_api_gateway_resource.resource.id
  rest_api_id   = aws_api_gateway_rest_api.gateway.id
  authorization = var.api_gateway_authorization
  http_method   = var.api_gateway_http_method
}

resource "aws_api_gateway_integration" "lambda" {
  rest_api_id             = aws_api_gateway_rest_api.gateway.id
  resource_id             = aws_api_gateway_method.method.resource_id
  http_method             = aws_api_gateway_method.method.http_method
  uri                     = aws_lambda_function.lambda.invoke_arn
  integration_http_method = var.api_gateway_integration_http_method
  type                    = var.api_gateway_integration_type

  depends_on = [
    aws_lambda_function.lambda
  ]
}

resource "aws_lambda_permission" "apigateway" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = "lambdaTest"
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.gateway.execution_arn}/*/*"

}
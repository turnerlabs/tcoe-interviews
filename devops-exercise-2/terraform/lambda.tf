resource "aws_iam_policy" "lambda_logging" {
  name        = var.iam_policy_lambda_name
  path        = var.iam_policy_lambda_path
  description = var.iam_policy_lambda_description

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ]
      Resource = "arn:aws:logs:*:*:*"
      Effect   = "Allow"
      }
    ]
  })
}

resource "aws_iam_role" "lambda_logging_role" {
  name        = var.iam_role_lambda_name
  description = var.iam_role_lambda_description

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_logs" {
  policy_arn = aws_iam_policy.lambda_logging.arn
  role       = aws_iam_role.lambda_logging_role.name
}

resource "aws_cloudwatch_log_group" "cloudwatch" {
  name              = var.cloudwatch_lambda_name
  retention_in_days = var.cloudwatch_lambda_retention
}

data "archive_file" "python_lambda_package" {
  type        = var.lambda_package_type
  source_file = var.lambda_package_source_file
  output_path = var.lambda_package_output_path
  # output_path = "${path.module}${var.lambda_package_output_path}"
}

resource "aws_lambda_function" "lambda" {
  function_name    = var.lambda_function_name
  filename         = var.lambda_function_filename
  source_code_hash = data.archive_file.python_lambda_package.output_base64sha256
  role             = aws_iam_role.lambda_logging_role.arn
  runtime          = var.lambda_function_runtime
  handler          = var.lambda_function_handler
  timeout          = var.lambda_function_timeout
  publish          = var.bool_true

  depends_on = [
    aws_iam_role_policy_attachment.lambda_logs,
    aws_cloudwatch_log_group.cloudwatch,
    data.archive_file.python_lambda_package
  ]
}
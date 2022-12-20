resource "aws_dynamodb_table" "dynamodb_terraform_state_lock" {
  name           = "terraform-tfstate-lock"
  hash_key       = "LockID"
  read_capacity  = 20
  write_capacity = 20

  attribute {
    name = "LockID"
    type = "S"
  }

  server_side_encryption {
    enabled     = true
    kms_key_arn = aws_kms_key.terraform-backend.arn
  }

  tags = {
    Name           = "terraform-tfstate-lock"
    Owners         = "DevOps"
    Version        = "1.0.0"
    Monitoring     = "No"
    Security       = "High"
    DataProtection = "No"
    Critical       = "High"
  }
}

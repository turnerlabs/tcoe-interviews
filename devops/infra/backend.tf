terraform {
  backend "s3" {
    bucket         = var.bucket_name
    key            = var.bucket_key
    region         = "us-east-1"
    dynamodb_table = var.dynamodb_table
  }
}


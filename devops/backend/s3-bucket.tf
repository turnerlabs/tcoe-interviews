resource "aws_s3_bucket" "this" {
  bucket        = var.bucket_name
  force_destroy = false
  tags = {
    Name           = var.bucket_name
    Owners         = "DevOps"
    Version        = "1.0.0"
    Monitoring     = "No"
    Security       = "High"
    DataProtection = "No"
    Critical       = "High"
  }
}

resource "aws_s3_bucket_acl" "this" {
  bucket = aws_s3_bucket.this.id
  acl    = "private"
}

resource "aws_s3_bucket_public_access_block" "this" {
  bucket                  = aws_s3_bucket.this.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "this" {
  bucket = aws_s3_bucket.this.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "this" {
  bucket = aws_s3_bucket.this.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm     = "aws:kms"
      kms_master_key_id = aws_kms_key.terraform-backend.arn
    }
  }
}

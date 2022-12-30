resource "aws_s3_bucket" "s3_bucket" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_acl" "s3_bucket_test" {
  bucket = aws_s3_bucket.s3_bucket.id
  acl    = var.bucket_acl
}

resource "aws_s3_bucket_versioning" "s3_bucket_versioning" {
  bucket = aws_s3_bucket.s3_bucket.id
  versioning_configuration {
    status = var.bucket_versioning_status
  }
}

resource "aws_s3_bucket_public_access_block" "s3_bucket_access" {
  bucket = aws_s3_bucket.s3_bucket.id

  block_public_acls       = var.bool_true
  block_public_policy     = var.bool_true
  ignore_public_acls      = var.bool_true
  restrict_public_buckets = var.bool_true
}
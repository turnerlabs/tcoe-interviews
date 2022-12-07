###################################
# CloudFront Origin Access Identity
###################################
resource "aws_cloudfront_origin_access_identity" "example" {
  comment = "Test WBD"
}

###################################
# IAM Policy Document
###################################
data "aws_iam_policy_document" "read_bucket" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.test_wbd_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.example.iam_arn]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.test_wbd_bucket.arn]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.example.iam_arn]
    }
  }
}

###################################
# S3
###################################
resource "aws_s3_bucket" "test_wbd_bucket" {
  bucket = var.bucket_name

  tags = merge({ Name = format("%s-S3", var.name) }, var.tags)
}
resource "aws_s3_bucket_website_configuration" "test_wbd_bucket_web" {
  bucket = aws_s3_bucket.test_wbd_bucket.bucket

  index_document {
    suffix = "index.html"
  }
}

###################################
# S3 Bucket Policy
###################################
resource "aws_s3_bucket_policy" "read_gitbook" {
  bucket = aws_s3_bucket.test_wbd_bucket.id
  policy = data.aws_iam_policy_document.read_bucket.json
}

###################################
# S3 Bucket Public Access Block
###################################
resource "aws_s3_bucket_public_access_block" "b_wbd" {
  bucket = aws_s3_bucket.test_wbd_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "b_acl" {
  bucket = aws_s3_bucket.test_wbd_bucket.id
  acl    = "private"
}

data "aws_cloudfront_origin_request_policy" "this" {
  name = "Managed-CORS-S3Origin"
}

data "aws_cloudfront_cache_policy" "this" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_response_headers_policy" "custom_header" {
  name = var.name_cf_policy

  custom_headers_config {
    items {
      header   = "x-cloudfront-aws-token"
      override = true
      value    = "7c9c2d3a-8033-4295-9b28-af8b06-XXE"
    }
  }
}

###################################
# CloudFront
###################################
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.test_wbd_bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.test_wbd_bucket.bucket

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.example.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Test WBD"
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.test_wbd_bucket.bucket

    viewer_protocol_policy = "https-only"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    compress               = true

    origin_request_policy_id = data.aws_cloudfront_origin_request_policy.this.id
    cache_policy_id          = data.aws_cloudfront_cache_policy.this.id
  }

  price_class = var.price_class

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  lifecycle {
    ignore_changes = [default_cache_behavior]
  }

  tags = merge({ Name = format("%s-CF", var.name) }, var.tags)

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

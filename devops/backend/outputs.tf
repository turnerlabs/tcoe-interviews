output "s3_bucket_name" {
  value = aws_s3_bucket.this.id
}

output "key_arn" {
  description = "The arn of the key"
  value       = aws_kms_key.terraform-backend.arn
}
# terraform {

#   backend "s3" {
#     bucket         = "${var.bucket_name}"
#     key            = "${var.key_path}"
#     region         = "${var.region}"
#     dynamodb_table = "${var.dynamodb_table}"
#   }
# }
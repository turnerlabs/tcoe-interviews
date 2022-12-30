resource "aws_dynamodb_table" "dynamodb" {
  name           = var.dynamodb_table_name
  read_capacity  = var.dynamodb_read_capacity
  write_capacity = var.dynamodb_write_capacity
  hash_key       = var.dynamodb_hash_key

  attribute {
    name = var.dynamodb_attribute_name
    type = var.dynamodb_attribute_type
  }
}
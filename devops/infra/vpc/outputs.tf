output "vpc_id" {
  value = aws_vpc.vpc.id
}

output "vpc_cidr" {
  value = aws_vpc.vpc.cidr_block
}

output "vpc_arn" {
  value = aws_vpc.vpc.arn
}

output "public_sub_1_id" {
  value = aws_subnet.public_sub_1.id
}

output "public_sub_2_id" {
  value = aws_subnet.public_sub_2.id
}

output "public_sub_3_id" {
  value = aws_subnet.public_sub_3.id
}

output "private_sub_1_id" {
  value = aws_subnet.private_sub_1.id
}

output "private_sub_2_id" {
  value = aws_subnet.private_sub_2.id
}

output "private_sub_3_id" {
  value = aws_subnet.private_sub_3.id
}

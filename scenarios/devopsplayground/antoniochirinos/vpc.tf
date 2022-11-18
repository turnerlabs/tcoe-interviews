# network

# CIDR VPC
resource "aws_vpc" "wbd-vpc" {
  cidr_block = "10.16.0.0/16"
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

# Fetch AZs in the current region
data "aws_availability_zones" "available" {
}


# Create var.az_count private subnets, each in a different AZ
resource "aws_subnet" "private" {
  count             = var.az_count
  cidr_block        = cidrsubnet(aws_vpc.wbd-vpc.cidr_block, 8, count.index)
  availability_zone = data.aws_availability_zones.available.names[count.index]
  vpc_id            = aws_vpc.wbd-vpc.id
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

# Create var.az_count public subnets, each in a different AZ
resource "aws_subnet" "public" {
  count                   = var.az_count
  cidr_block              = cidrsubnet(aws_vpc.wbd-vpc.cidr_block, 8, var.az_count + count.index)
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  vpc_id                  = aws_vpc.wbd-vpc.id
  map_public_ip_on_launch = true
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

# Internet Gateway for the public subnet
resource "aws_internet_gateway" "wbd-igw" {
  vpc_id = aws_vpc.wbd-vpc.id
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

# Route the public subnet traffic through the IGW
resource "aws_route" "internet_access" {
  route_table_id         = aws_vpc.wbd-vpc.main_route_table_id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.wbd-igw.id

}

# Create a NAT gateway with an Elastic IP for each private subnet to get internet connectivity
resource "aws_eip" "wbd-eip" {
  count      = var.az_count
  vpc        = true
  depends_on = [aws_internet_gateway.wbd-igw]
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

resource "aws_nat_gateway" "wbd-natgw" {
  count         = var.az_count
  subnet_id     = element(aws_subnet.public.*.id, count.index)
  allocation_id = element(aws_eip.wbd-eip.*.id, count.index)
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

# Create a new route table for the private subnets
resource "aws_route_table" "private" {
  count  = var.az_count
  vpc_id = aws_vpc.wbd-vpc.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = element(aws_nat_gateway.wbd-natgw.*.id, count.index)
  }
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

# Explicitly associate the newly created route tables to the private subnets 
resource "aws_route_table_association" "private" {
  count          = var.az_count
  subnet_id      = element(aws_subnet.private.*.id, count.index)
  route_table_id = element(aws_route_table.private.*.id, count.index)
}

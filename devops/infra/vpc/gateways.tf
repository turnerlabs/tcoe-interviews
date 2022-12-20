#Elastic IP NAT Gateway 
resource "aws_eip" "nat" {
    vpc = true
    tags = {
        Name    = "${var.environment}-eip"
        Environment = "${var.environment}"
    }
}

#NAT Gateway
resource "aws_nat_gateway" "ngw" {
    allocation_id = aws_eip.nat.id
    subnet_id = aws_subnet.public_sub_1.id
    depends_on = [aws_internet_gateway.igw]
    tags = {
        Name    = "${var.environment}-nat-gateway"
        Environment = "${var.environment}"
    }
}

#Internet Gateway
resource "aws_internet_gateway" "igw" {
    vpc_id = aws_vpc.vpc.id
    tags = {
        Name    = "${var.environment}-internet-gateway"
        Environment = "${var.environment}"
    }
}
#Public Subnet 1
resource "aws_subnet" "public_sub_1" {
    cidr_block = var.public_sub_1
    vpc_id = aws_vpc.vpc.id
    map_public_ip_on_launch = true
    availability_zone = data.aws_availability_zones.available.names[0]
    #0 order AZ
    tags = {
        Name = "${var.environment}-public-subnet-1"
        Subnet = "public"
        Environment = "${var.environment}"
        "kubernetes.io/cluster/${var.environment}-cluster" = "shared"
        "kubernetes.io/role/elb" = 1
        "karpenter.sh/discovery": "${var.environment}-cluster"
    }
}

#Public Subnet 2
resource "aws_subnet" "public_sub_2" {
    cidr_block = var.public_sub_2
    vpc_id = aws_vpc.vpc.id
    map_public_ip_on_launch = true
    availability_zone = data.aws_availability_zones.available.names[1]
    #1 order AZ
    tags = {
        Name = "${var.environment}-public-subnet-2"
        Subnet = "public"
        Environment = "${var.environment}"
        "kubernetes.io/cluster/${var.environment}-cluster" = "shared"
        "kubernetes.io/role/elb" = 1
        "karpenter.sh/discovery": "${var.environment}-cluster"
    }
}

#Public Subnet 3
resource "aws_subnet" "public_sub_3" {
    cidr_block = var.public_sub_3
    vpc_id = aws_vpc.vpc.id
    map_public_ip_on_launch = true
    availability_zone = data.aws_availability_zones.available.names[2]
    tags = {
        Name = "${var.environment}-public-subnet-3"
        Subnet = "public"
        Environment = "${var.environment}"
        "kubernetes.io/cluster/${var.environment}-cluster" = "shared"
        "kubernetes.io/role/elb" = 1
        "karpenter.sh/discovery": "${var.environment}-cluster"
    }
}

#Private Subnet 1
resource "aws_subnet" "private_sub_1" {
    cidr_block = var.private_sub_1
    vpc_id = aws_vpc.vpc.id
    map_public_ip_on_launch = false
    availability_zone = data.aws_availability_zones.available.names[0]
    tags = {
        Name    = "${var.environment}-private-subnet-1"
        Subnet = "private"
        Environment = "${var.environment}"
        "kubernetes.io/cluster/${var.environment}-cluster" = "shared"
        "kubernetes.io/role/internal-elb" = 1
        "karpenter.sh/discovery": "${var.environment}-cluster"
    }
}

#Private Subnet 2
resource "aws_subnet" "private_sub_2" {
    cidr_block = var.private_sub_2
    vpc_id = aws_vpc.vpc.id
    map_public_ip_on_launch = false
    availability_zone = data.aws_availability_zones.available.names[1]
    tags = {
        Name    = "${var.environment}-private-subnet-2"
        Subnet = "private"
        Environment = "${var.environment}"
        "kubernetes.io/cluster/${var.environment}-cluster" = "shared"
        "kubernetes.io/role/internal-elb" = 1
        "karpenter.sh/discovery": "${var.environment}-cluster"
    }
}

#Private Subnet 3
resource "aws_subnet" "private_sub_3" {
    cidr_block = var.private_sub_3
    vpc_id = aws_vpc.vpc.id
    map_public_ip_on_launch = false
    availability_zone = data.aws_availability_zones.available.names[2]
    tags = {
        Name    = "${var.environment}-private-subnet-2"
        Subnet = "private"
        Environment = "${var.environment}"
        "kubernetes.io/cluster/${var.environment}-cluster" = "shared"
        "kubernetes.io/role/internal-elb" = 1
        "karpenter.sh/discovery": "${var.environment}-cluster"
    }
}

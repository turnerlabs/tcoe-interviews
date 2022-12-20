 #Public Route Table
resource "aws_route_table" "routetablepublic" {
    vpc_id = aws_vpc.vpc.id
    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.igw.id
    }
    tags = {
        Name    = "${var.environment}-routetablepublic"
        Environment = "${var.environment}"
    }
}

resource "aws_route_table_association" "pubrtas1" {
    subnet_id = aws_subnet.public_sub_1.id
    route_table_id = aws_route_table.routetablepublic.id
}

resource "aws_route_table_association" "pubrtas2" {
    subnet_id = aws_subnet.public_sub_2.id
    route_table_id = aws_route_table.routetablepublic.id
}

resource "aws_route_table_association" "pubrtas3" {
    subnet_id = aws_subnet.public_sub_3.id
    route_table_id = aws_route_table.routetablepublic.id
}

#Private Route Table
resource "aws_route_table" "routetableprivate" {
    vpc_id = aws_vpc.vpc.id
    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_nat_gateway.ngw.id
    }
    route {
      cidr_block = var.mongoatlascidr
      vpc_peering_connection_id = var.mongoatlaspcx
    }
    tags = {
        Name    = "${var.environment}-routetableprivate"
        Environment = "${var.environment}"
    }
}

#Asocia las Private Subnets a la Route Table
resource "aws_route_table_association" "prirtas1" {
    subnet_id = aws_subnet.private_sub_1.id
    route_table_id = aws_route_table.routetableprivate.id
}

resource "aws_route_table_association" "prirtas2" {
    subnet_id = aws_subnet.private_sub_2.id
    route_table_id = aws_route_table.routetableprivate.id
}

resource "aws_route_table_association" "prirtas3" {
    subnet_id = aws_subnet.private_sub_3.id
    route_table_id = aws_route_table.routetableprivate.id
}


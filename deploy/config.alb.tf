//resource "aws_default_vpc" "default" {
////  cidr_block = var.vpc_cidr
////  enable_dns_hostnames = true
//}
//
//resource "aws_internet_gateway" "default" {
//  vpc_id = aws_default_vpc.default.id
//}
//
//resource "aws_subnet" "primary" {
//  availability_zone_id = data.aws_availability_zones.default.zone_ids[0]
//  vpc_id = aws_default_vpc.default.id
//  cidr_block = "10.0.1.0/24"
//}
//
//resource "aws_subnet" "secondary" {
//  availability_zone_id = data.aws_availability_zones.default.zone_ids[1]
//  vpc_id = aws_default_vpc.default.id
//  cidr_block = "10.0.2.0/24"
//}
//
//data "aws_availability_zones" "default" {}
//
//resource "aws_lb" "websockets" {
//  name = "guided-websockets-${var.stage}"
//  internal = false
//  load_balancer_type = "application"
//  security_groups = [
//    aws_security_group.server.id]
//  subnets = [
//    aws_subnet.primary.id,
//    aws_subnet.secondary.id]
//
//
//  access_logs {
//    bucket = aws_s3_bucket.access_logs.bucket
//    prefix = "websockets"
//  }
//
//  tags = {
//    Name = "guided-websockets-${var.stage}"
//  }
//}
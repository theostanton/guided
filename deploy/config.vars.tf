variable "region" {
  type = string
  default = "eu-west-2"
}

variable "macro_version" {
  type = number
}

variable "vpc_cidr" {
  description = "CIDR for the whole VPC"
  default = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
  description = "CIDR for the Public Subnet"
  default = "10.0.0.0/24"
}

variable "aws_account_id" {
  type = number
  default = 132788847502
}

variable "stage" {
  type = string
}

variable "domain_name" {
  type = string
  default = "ridersbible.com"
}

variable "db_owner_user" {
  type = string
}

variable "db_owner_password" {
  type = string
}

variable "db_database" {
  type = string
  default = "main"
}

variable "db_port" {
  type = number
  default = "5432"
}

variable "db_postgraphile_user" {
  type = string
}

variable "db_postgraphile_password" {
  type = string
}

variable "db_schema" {
  type = string
  default = "public"
}
variable "jwt_secret" {
  type = string
}
variable "mapbox_token" {
  type = string
  default = "pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazcyMmt2cngwNGY2M2VuczRibTBxZHI2In0.ut-f02WOeLk0IvvyXCMyQg"
}


variable "region" {
  type = string
  default = "eu-west-2"
}

variable "macro_version" {
  type = number
}

variable "google_key" {
  type = string
}

variable "vpc_cidr" {
  description = "CIDR for the whole VPC"
  default = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
  description = "CIDR for the Public Subnet"
  default = "10.0.0.0/24"
}

variable "private_key_path" {
  type = string
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
  default = "superuser"
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
  default = "guided_postgraphile"
}

variable "db_schema" {
  type = string
  default = "public"
}
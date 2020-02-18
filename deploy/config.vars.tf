variable "region" {
  type = string
  default = "eu-west-2"
}

variable "app_version" {
  type = string
  default = "0.0.0"
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
  default = "guided"
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
  default = "guided"
}
variable "jwt_secret" {
  type = string
}
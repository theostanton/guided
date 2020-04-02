provider "aws" {
  profile = "default"
  region = var.region
}

provider "aws" {
  profile = "default"
  region = "us-east-1"
  alias = "virginia"
}

terraform {
  backend "s3" {
    bucket = "guided-terraform-states"
    key = "terraform.tfstate"
    region = "eu-west-2"
  }
}

locals {
  app_version = "0.1.${var.macro_version}"
  variables = {
    APP_VERSION = local.app_version
    POSTGRES_HOST = aws_route53_record.database.name
    POSTGRES_DB = var.db_database
    POSTGRES_PORT = var.db_port
    POSTGRES_USER = var.db_postgraphile_user
    POSTGRES_SCHEMA = var.db_schema
    POSTGRES_PASSWORD = var.db_postgraphile_password
    POSTGRAPHILE_PORT = 5000
    OWNER_USER = var.db_owner_user
    OWNER_PASSWORD = var.db_owner_password
    JWT_SECRET = var.jwt_secret
    COMPUTE_QUEUE_NAME = aws_sqs_queue.compute.name
  }
  env_file = join("\n", flatten([
  for key, value in local.variables:[
    "${key}=${value}"
  ]
  ]))
}

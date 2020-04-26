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
    encrypt = true
  }
}

data "aws_caller_identity" "current" {}

locals {
  app_version = "0.1.${var.macro_version}"
  domain_prefix = var.stage=="production" ? "" : "${var.stage}-"
  variables = {
    STAGE = var.stage
    GOOGLE_KEY = var.google_key
    APP_VERSION = local.app_version
    POSTGRES_HOST = aws_route53_record.database.name
    POSTGRES_DB = var.db_database
    POSTGRES_PORT = var.db_port
    POSTGRES_USER = var.db_postgraphile_user
    POSTGRES_SCHEMA = var.db_schema
    POSTGRES_PASSWORD = random_password.database_postgraphile.result
    POSTGRAPHILE_PORT = 5000
    OWNER_USER = var.db_owner_user
    OWNER_PASSWORD = random_password.database_owner.result
    JWT_SECRET = random_password.jwt_secret.result
    COMPUTE_QUEUE_NAME = aws_sqs_queue.compute.name
    AMEND_DATES_QUEUE_NAME = aws_sqs_queue.amend_dates.name
    GEOMETRIES_BUCKET_NAME = aws_s3_bucket.geometries.bucket
    DEFAULT_REGION = var.region
  }
  env_file = join("\n", flatten([
  for key, value in local.variables:[
    "${key}=${value}"
  ]
  ]))
}

variable "graphql_zip_path" {
  type = string
  default = "../backend/graphql_zipped.zip"
}

resource "aws_iam_role" "iam_for_graphql" {
  name = "iam_for_graphql"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_api_gateway_resource" "guided" {
  rest_api_id = aws_api_gateway_rest_api.guided.id
  parent_id = aws_api_gateway_rest_api.guided.root_resource_id
  path_part = "graphql"
}

resource "aws_api_gateway_method" "proxy" {
  rest_api_id = aws_api_gateway_rest_api.guided.id
  resource_id = aws_api_gateway_resource.guided.id
  http_method = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "graphql" {
  rest_api_id = aws_api_gateway_rest_api.guided.id
  resource_id = aws_api_gateway_method.proxy.resource_id
  http_method = aws_api_gateway_method.proxy.http_method

  integration_http_method = "POST"
  type = "AWS_PROXY"
  uri = aws_lambda_function.graphql.invoke_arn
}

resource "aws_api_gateway_method" "proxy_root" {
  rest_api_id = aws_api_gateway_rest_api.guided.id
  resource_id = aws_api_gateway_rest_api.guided.root_resource_id
  http_method = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "graphql_root" {
  rest_api_id = aws_api_gateway_rest_api.guided.id
  resource_id = aws_api_gateway_method.proxy_root.resource_id
  http_method = aws_api_gateway_method.proxy_root.http_method

  integration_http_method = "POST"
  type = "AWS_PROXY"
  uri = aws_lambda_function.graphql.invoke_arn
}

resource "aws_api_gateway_deployment" "graphql" {
  depends_on = [
    aws_api_gateway_integration.graphql,
    aws_api_gateway_integration.graphql_root,
  ]

  rest_api_id = aws_api_gateway_rest_api.guided.id
  stage_name = var.stage
}

resource "aws_lambda_permission" "api" {
  statement_id = "AllowAPIGatewayInvoke"
  action = "lambda:InvokeFunction"
  function_name = aws_lambda_function.graphql.function_name
  principal = "apigateway.amazonaws.com"

  # The "/*/*" portion grants access from any method on any resource
  # within the API Gateway REST API.
  source_arn = "${aws_api_gateway_rest_api.guided.execution_arn}/*/*"
}

//data "archive_file" "graphql" {
//  type = "zip"
//  output_path = "dist/${var.stage}-${var.app_version}-graphql.zip"
//  source_dir = "../backend/graphql_zipped.zip"
//}

resource "aws_route53_record" "graphql" {
  zone_id = aws_route53_zone.ridersbible.zone_id
  name = "${terraform.workspace}-graphql.ridersbible.com"
  type = "CNAME"
  ttl = "300"

  records = [
    aws_api_gateway_deployment.graphql.invoke_url]
}

resource "aws_s3_bucket" "graphql" {
  bucket = "guided-graphql-deployment-${var.stage}"
}

resource "aws_lambda_function" "graphql" {
  function_name = "guided-graphql-${var.stage}"
  role = aws_iam_role.iam_for_graphql.arn
  handler = "src/lambda.handler"
  s3_bucket = aws_s3_bucket.graphql.bucket
  s3_key = "${var.app_version}.zip"
  runtime = "nodejs12.x"

  environment {
    variables = {
      APP_VERSION = var.app_version
      POSTGRES_HOST = aws_route53_record.database.name
      POSTGRES_DB = var.db_database
      POSTGRES_PORT = var.db_port
      POSTGRES_USER = var.db_postgraphile_user
      POSTGRES_SCHEMA = var.db_schema
      POSTGRES_PASSWORD = var.db_postgraphile_password
      POSTGRAPHILE_PORT = 5000
      JWT_SECRET = var.jwt_secret
    }
  }
}
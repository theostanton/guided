resource "aws_iam_role" "graphql" {
  name = "iam_for_graphql"
  assume_role_policy = templatefile("${path.module}/templates/lambda-policy.tpl", {})
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

data "archive_file" "graphql" {
  type = "zip"
  output_path = "dist/${var.stage}-${var.app_version}-graphql.zip"
  source_dir = "../backend/elements/graphql/dist"
}

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

resource "aws_iam_policy" "graphql_logging" {
  name = "graphql_logging_${var.stage}"
  path = "/"
  description = "IAM policy for logging from a lambda"
  policy = templatefile("${path.module}/templates/cloudwatch-policy.tpl", {})
}

resource "aws_iam_role_policy_attachment" "graphql" {
  role = aws_iam_role.graphql.name
  policy_arn = aws_iam_policy.graphql_logging.arn
}

resource "aws_cloudwatch_log_group" "graphql" {
  name = "/aws/lambda/graphql-${var.stage}-hail"
  retention_in_days = 14
}

resource "aws_lambda_function" "graphql" {
  function_name = "guided-graphql-${var.stage}"
  timeout = 30
  role = aws_iam_role.graphql.arn
  handler = "index.handler"
  filename = data.archive_file.graphql.output_path
  source_code_hash = filebase64sha256(data.archive_file.graphql.output_path)
  runtime = "nodejs12.x"

  depends_on = [
    aws_iam_role_policy_attachment.graphql,
    aws_cloudwatch_log_group.graphql]

  environment {
    variables = {
      APP_VERSION = var.app_version
      POSTGRES_HOST = aws_db_instance.guided.address
      POSTGRES_DB = var.db_database
      POSTGRES_PORT = var.db_port
      POSTGRES_USER = var.db_postgraphile_user
      POSTGRES_SCHEMA = var.db_schema
      POSTGRES_PASSWORD = var.db_postgraphile_password
      POSTGRAPHILE_PORT = 5000
      OWNER_USER = var.db_owner_user
      OWNER_PASSWORD = var.db_owner_password
      JWT_SECRET = var.jwt_secret
    }
  }
}
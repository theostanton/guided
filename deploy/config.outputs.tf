output "website_url" {
  value = "https://${aws_s3_bucket.site.website_endpoint}"
}

output "database_url" {
  value = "https://${aws_route53_record.database.name}"
}

output "lambda_url" {
  value = "https://${aws_route53_record.graphql.name}"
}

output "lambda_invoke_url" {
  value = aws_api_gateway_deployment.graphql.invoke_url
}

output "lambda_api_url" {
  value = "${aws_api_gateway_deployment.graphql.invoke_url}/${aws_api_gateway_resource.guided.path_part}"
}
output "lambda_logging" {
  value = aws_cloudwatch_log_group.graphql.name
}
output "website_url" {
  value = "https://${aws_s3_bucket.site.website_endpoint}"
}

output "database_url" {
  value = "https://${aws_route53_record.database.name}"
}

output "lambda_url" {
  value = "https://${aws_route53_record.lambda.name}"
}

output "lambda_invoke_url" {
  value = aws_api_gateway_deployment.guided.invoke_url
}

output "lambda_api_url" {
  value = "${aws_api_gateway_deployment.guided.invoke_url}/${aws_api_gateway_resource.guided.path_part}"
}
output "website_url" {
  value = "https://${aws_s3_bucket.site.website_endpoint}"
}

output "database_url" {
  value = "https://${aws_route53_record.database.name}"
}

// TODO
//output "lambda_url" {
//  value = "https://${aws_route53_record.graphql.name}"
//}
//
//output "lambda_invoke_url" {
//  value = aws_api_gateway_deployment.graphql.invoke_url
//}
//
//output "lambda_api_url" {
//  value = "${aws_api_gateway_deployment.graphql.invoke_url}/${aws_api_gateway_resource.guided.path_part}"
//}

output "compute_queue" {
  value = aws_sqs_queue.compute.name
}

output "graphql_container_tag" {
  value = "${var.aws_account_id}.dkr.ecr.${var.region}.amazonaws.com/${aws_ecr_repository.guided.name}"
}

output "deployed_macro_version" {
  value = var.macro_version
}


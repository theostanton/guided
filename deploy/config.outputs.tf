output "website_url" {
  value = "https://${aws_s3_bucket.site.website_endpoint}"
}

output "database_url" {
  value = "https://${aws_route53_record.database.name}"
}

output "server_url" {
  value = "http://${aws_route53_record.server.name}"
}

output "graphql_endpoint" {
  value = "https://${aws_route53_record.api.name}"
}

output "graphql_websocket" {
  value = "wss://${aws_route53_record.api.name}"
}

output "compute_queue" {
  value = aws_sqs_queue.compute.name
}

output "env_file" {
  value = local.env_file
}

output "deployed_macro_version" {
  value = var.macro_version
}


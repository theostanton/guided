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

resource "aws_api_gateway_method" "proxy_root" {
  rest_api_id = aws_api_gateway_rest_api.guided.id
  resource_id = aws_api_gateway_rest_api.guided.root_resource_id
  http_method = "ANY"
  authorization = "NONE"
}


//TODO
//resource "aws_lambda_permission" "api" {
//  statement_id = "AllowAPIGatewayInvoke"
//  action = "lambda:InvokeFunction"
//  function_name = aws_lambda_function.graphql.function_name
//  principal = "apigateway.amazonaws.com"
//
//  # The "/*/*" portion grants access from any method on any resource
//  # within the API Gateway REST API.
//  source_arn = "${aws_api_gateway_rest_api.guided.execution_arn}/*/*"
//}
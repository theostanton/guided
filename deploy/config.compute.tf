locals {
  compute_zip_path = "${path.module}/dist/${var.stage}-${local.app_version}-compute.zip"
}

resource "aws_iam_role" "compute" {
  name = "guided_compute_${var.stage}"
  assume_role_policy = templatefile("${path.module}/templates/lambda-policy.tpl", {})
}

resource "aws_sqs_queue" "compute" {
  name = "compute-stage-${var.stage}"
}

resource "aws_lambda_event_source_mapping" "compute" {
  event_source_arn = aws_sqs_queue.compute.arn
  function_name = aws_lambda_function.compute.arn
  batch_size = 1
}

resource "aws_s3_bucket" "compute" {
  bucket = "guided-deployment-compute-${var.stage}"
}

resource "aws_iam_policy" "compute_logging" {
  name = "logging_compute_${var.stage}"
  path = "/"
  description = "IAM policy for logging from a lambda"
  policy = templatefile("${path.module}/templates/cloudwatch-policy.tpl", {})
}

resource "aws_iam_policy" "compute_sqs" {
  name = "sqs_compute_${var.stage}"
  path = "/"
  description = "IAM policy for logging from a lambda"
  policy = templatefile("${path.module}/templates/sqs-policy.tpl", {})
}

resource "aws_iam_role_policy_attachment" "compute" {
  role = aws_iam_role.compute.name
  policy_arn = aws_iam_policy.compute_logging.arn
}

resource "aws_iam_role_policy_attachment" "compute_sqs" {
  role = aws_iam_role.compute.name
  policy_arn = aws_iam_policy.compute_sqs.arn
}


resource "aws_lambda_function" "compute" {
  function_name = "guided-compute-${var.stage}"
  timeout = 30
  role = aws_iam_role.compute.arn
  handler = "index.handler"
  filename = local.compute_zip_path
  source_code_hash = filebase64sha256(local.compute_zip_path)
  runtime = "nodejs12.x"

  depends_on = [
    aws_iam_role_policy_attachment.compute]

  environment {
    variables = local.variables
  }
}
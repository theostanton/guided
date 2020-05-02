locals {
  amend_dates_zip_path = "${path.module}/dist/${var.stage}-${local.app_version}-amend-dates.zip"
}

resource "aws_iam_role" "amend_dates" {
  name = "guided-amend-dates-${var.stage}"
  assume_role_policy = templatefile("${path.module}/templates/lambda-policy.tpl", {})
}

resource "aws_sqs_queue" "amend_dates" {
  name = "amend-dates-${var.stage}"
}

resource "aws_sqs_queue_policy" "amend_dates" {
  queue_url = aws_sqs_queue.amend_dates.id

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Id": "sqspolicy",
  "Statement": [
    {
      "Sid": "First",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "sqs:*",
      "Resource": "${aws_sqs_queue.amend_dates.arn}"
    }
  ]
}
POLICY
}

resource "aws_lambda_event_source_mapping" "amend_dates" {
  event_source_arn = aws_sqs_queue.amend_dates.arn
  function_name = aws_lambda_function.amend_dates.arn
  batch_size = 1
}

resource "aws_s3_bucket" "amend_dates" {
  bucket = "guided-deployment-amend-dates-${var.stage}"
}

resource "aws_iam_policy" "amend_dates_logging" {
  name = "logging-amend-dates-${var.stage}"
  path = "/"
  policy = templatefile("${path.module}/templates/cloudwatch-policy.tpl", {})
}

resource "aws_iam_role_policy_attachment" "amend_dates_logging" {
  role = aws_iam_role.amend_dates.name
  policy_arn = aws_iam_policy.amend_dates_logging.arn
}

resource "aws_lambda_function" "amend_dates" {
  function_name = "guided-amend-dates-${var.stage}"
  timeout = 30
  role = aws_iam_role.amend_dates.arn
  handler = "amend_dates"
  filename = local.amend_dates_zip_path
  source_code_hash = filebase64sha256(local.amend_dates_zip_path)
  runtime = "go1.x"

  depends_on = [
    aws_iam_role.amend_dates,
    aws_iam_role_policy_attachment.amend_dates_logging]

  environment {
    variables = local.variables
  }
}
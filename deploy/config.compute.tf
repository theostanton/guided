locals {
  compute_zip_path = "${path.module}/dist/${var.stage}-${local.app_version}-compute.zip"
}

resource "aws_iam_role" "compute" {
  name = "guided-compute-${var.stage}"
  assume_role_policy = templatefile("${path.module}/templates/lambda-policy.tpl", {})
}

resource "aws_sqs_queue" "compute" {
  name = "compute-stage-${var.stage}"
}
resource "aws_sqs_queue_policy" "compute" {
  queue_url = aws_sqs_queue.compute.id

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
      "Resource": "${aws_sqs_queue.compute.arn}"
    }
  ]
}
POLICY
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
  name = "logging-compute-${var.stage}"
  path = "/"
  policy = templatefile("${path.module}/templates/cloudwatch-policy.tpl", {})
}


data "aws_iam_policy_document" "compute_s3" {
  statement {
    actions = [
      "s3:PutObject",
      "s3:PutObjectAcl"]

    effect = "Allow"

    resources = [
      "arn:aws:s3:::*/*",
      aws_s3_bucket.geometries.arn]
  }
}

resource "aws_iam_policy" "compute_s3" {
  name = "s3-compute-${var.stage}"
  path = "/"
  policy = data.aws_iam_policy_document.compute_s3.json
}

resource "aws_iam_role_policy_attachment" "compute_logging" {
  role = aws_iam_role.compute.name
  policy_arn = aws_iam_policy.compute_logging.arn
}

resource "aws_iam_role_policy_attachment" "compute_s3" {
  role = aws_iam_role.compute.name
  policy_arn = aws_iam_policy.compute_s3.arn
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
    aws_iam_role.compute,
    aws_iam_role_policy_attachment.compute_s3,
    aws_iam_role_policy_attachment.compute_logging]

  environment {
    variables = local.variables
  }
}

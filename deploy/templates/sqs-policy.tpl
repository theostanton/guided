{
  "Version": "2012-10-17",
  "Statement": [
    {
            "Effect": "Allow",
            "Action": [
                  "sqs:ChangeMessageVisibility",
                  "sqs:DeleteMessage",
                  "sqs:GetQueueAttributes",
                  "sqs:ReceiveMessage"
            ],
            "Resource": "*"
        }
  ]
}
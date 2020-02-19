#yarn workspace @guided/lambda run pack
#yarn workspace @guided/lambda run buildCache
terraform workspace select staging
terraform apply -target=aws_lambda_function.graphql -var-file vars/staging.tfvars -auto-approve

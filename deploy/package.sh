#yarn workspace @guided/graphql run pack
#yarn workspace @guided/graphql run buildCache
#terraform workspace select staging

#echo --- Packageing compute-stage
#terraform apply -target=null_resource.compute_build -var-file vars/staging.tfvars -auto-approve


echo --- Zipping compute-stage
terraform apply -target=archive_file.compute -var-file vars/staging.tfvars -auto-approve
#terraform apply -target=aws_lambda_function.compute -var-file vars/staging.tfvars -auto-approve

#echo --- Packageing graphql
terraform apply -target=null_resource.graphql_build -var-file vars/staging.tfvars -auto-approve
#
#echo --- Zipping graphql
terraform apply -target=archive_file.graphql -var-file vars/staging.tfvars -auto-approve

terraform apply -target=null_resource.compute -var-file vars/staging.tfvars -auto-approve

echo --- Building graphql
terraform apply -target=null_resource.compute_build -var-file vars/staging.tfvars -auto-approve

echo --- Zipping compute-stage
terraform apply -target=archive_file.compute -var-file vars/staging.tfvars -auto-approve

echo --- Building graphql
terraform apply -target=null_resource.graphql_build -var-file vars/staging.tfvars -auto-approve

echo --- Zipping graphql
terraform apply -target=archive_file.graphql -var-file vars/staging.tfvars -auto-approve

#terraform import -var-file vars/staging.tfvars  aws_acm_certificate.guided  arn:aws:acm:us-east-1:132788847502:certificate/cd83541a-7887-4db5-b372-973de1e718af
#terraform import -var-file vars/staging.tfvars  aws_cloudfront_distribution.site  E1EMO4J4VCIT47
terraform state rm aws_cloudfront_distribution.site
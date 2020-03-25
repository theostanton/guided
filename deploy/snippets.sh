#terraform import -var-file vars/staging.tfvars  aws_acm_certificate.guided  arn:aws:acm:us-east-1:132788847502:certificate/cd83541a-7887-4db5-b372-973de1e718af
terraform import -var-file vars/production.tfvars  aws_route53_zone.ridersbible  Z1PA7SF11O58YF
#terraform state rm aws_cloudfront_distribution.site
#aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin 132788847502.dkr.ecr.eu-west-2.amazonaws.com

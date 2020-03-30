#terraform import -var-file vars/staging.tfvars  aws_acm_certificate.guided arn:aws:acm:us-east-1:132788847502:certificate/0bffcc51-3b51-4cf3-9f7b-3ae074a35434
#terraform import -var-file vars/production.tfvars  aws_route53_zone.ridersbible  Z0349330U23G7BUJHW97
#terraform state rm aws_cloudfront_distribution.site
#aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin 132788847502.dkr.ecr.eu-west-2.amazonaws.com

#aws ec2 create-key-pair --key-name GuidedKeyPair --query 'KeyMaterial' --output text > GuidedKeyPair.pem

chmod 400 guided-server-staging.pem
ssh-keygen -y -f guided-server-staging.pem

#terraform import -var-file vars/staging.tfvars aws_key_pair.server 20:5a:17:91:23:27:d7:70:95:82:18:bd:d3:f3:5d:85:3d:6f:85:c4
#terraform destroy -var-file vars/staging.tfvars

#ssh -i guided-server-staging.pem ubuntu@staging-api.ridersbible.com
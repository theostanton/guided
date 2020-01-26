# https://docs.aws.amazon.com/appsync/latest/devguide/tutorial-rds-resolvers.html

aws rds create-db-cluster --db-cluster-identifier http-endpoint-test --master-username username --master-user-password password --engine aurora --engine-mode serverless --region eu-west-2

aws secretsmanager create-secret --name HttpRDSSecret --secret-string file://creds.json --region eu-west-2
# "ARN": "arn:aws:secretsmanager:eu-west-2:132788847502:secret:HttpRDSSecret-0JGE4t"

aws rds modify-db-cluster --db-cluster-identifier http-endpoint-test --enable-http-endpoint
#docker exec -it website-example /bin/ash;
ssh -i utils/guided.pem ec2-user@ec2-3-10-215-237.eu-west-2.compute.amazonaws.com

ecs-cli configure --cluster guided --default-launch-type launch_type --region eu-west-2

aws2 iam --region eu-west-2 create-role --role-name ecsTaskExecutionRole --assume-role-policy-document file://utils/task-execution-assume-role.json
aws2 iam --region eu-west-2 put-role-policy --role-name ecsTaskExecutionRole --policy-document file://utils/task-execution-assume-role.json

aws iam --region eu-west-2 attach-role-policy --role-name ecsTaskExecutionRole --policy-arn arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy
aws iam --region eu-west-2 attach-role-policy --role-name ecsTaskExecutionRole --policy-arn arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role

ecs-cli configure --cluster guided --default-launch-type FARGATE --config-name guided --region eu-west-2

ecs-cli configure profile --profile-name guided

ecs-cli up --cluster-config guided --ecs-profile guided

aws ec2 describe-security-groups --filters Name=vpc-id,Values="vpc-093ef39713ddb96a9" --region eu-west-2
aws ec2 describe-security-groups --filters Name=vpc-id,Values=vpc-8cf586e4 --region eu-west-2
aws ec2 describe-security-groups --region eu-west-2

aws ec2 authorize-security-group-ingress --group-id sg-0dfc033cf69d90efd --protocol tcp --port 80 --cidr 0.0.0.0/0 --region eu-west-2


sg-0dfc033cf69d90efd

ecs-cli compose --project-name guided service up --create-log-groups --cluster-config guided --ecs-profile guided

ecs-cli compose --project-name guided service ps --cluster-config guided --ecs-profile guided

aws ecr get-login --no-include-email --region eu-west-2

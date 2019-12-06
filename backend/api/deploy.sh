aws ecr get-login --no-include-email --region us-west-2 | /bin/bash
docker build -t guided/api .
docker tag guided/api:latest 132788847502.dkr.ecr.eu-west-2.amazonaws.com/guided/api:latest
docker push 132788847502.dkr.ecr.eu-west-2.amazonaws.com/guided/api:latest


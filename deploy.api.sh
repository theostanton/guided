echo BUILD
docker build -t guided/api -f ./backend/api/Dockerfile .
#docker run --rm -p 8080:80 --name yourproject-alice yourproject/alice
aws2 ecr get-login --no-include-email --region us-west-2 | /bin/bash
echo TAG
docker tag guided/api:latest 132788847502.dkr.ecr.eu-west-2.amazonaws.com/guided/api:latest
echo PUSH
docker push 132788847502.dkr.ecr.eu-west-2.amazonaws.com/guided/api:latest

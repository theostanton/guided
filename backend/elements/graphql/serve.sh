#export STAGE=staging
#export DATABASE_URL=postgresql://guided_postgraphile:password@staging-database.ridersbible.com:5432/main
#export POSTGRES_HOST=staging-database.ridersbible.com
#export POSTGRES_PORT=5432
#export OWNER_USER=superuser
#export OWNER_PASSWORD=password
#export POSTGRES_USER=guided_postgraphile
#export POSTGRES_PASSWORD=password
#export POSTGRES_DB=main
#export POSTGRES_SCHEMA=public
#export POSTGRAPHILE_PORT=5000
#export JWT_SECRET=5a399dba98bb6bf23bcd640d08383342549b8731c1da1a9f9af24514d607c25b
#export COMPUTE_QUEUE_NAME=compute-stage-staging

docker run -p 80:80 -d 132788847502.dkr.ecr.eu-west-2.amazonaws.com/guided-staging:latest
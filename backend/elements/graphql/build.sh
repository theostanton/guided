export STAGE=staging
export DATABASE_URL=postgres://superuser:password@staging-database.ridersbible.com:5432/main
export POSTGRES_HOST=staging-database.ridersbible.com
export POSTGRES_PORT=5432
export OWNER_USER=superuser
export OWNER_PASSWORD=password
export POSTGRES_USER=guided_postgraphile
export POSTGRES_PASSWORD=password
export POSTGRES_DB=main
export POSTGRES_SCHEMA=public
export POSTGRAPHILE_PORT=5000
export JWT_SECRET=5a399dba98bb6bf23bcd640d08383342549b8731c1da1a9f9af24514d607c25b
export COMPUTE_QUEUE_NAME=compute-stage-staging

mkdir -p dist
yarn build
#yarn build:cache
yarn webpack:server

docker build -t theostanton/guided/graphql .
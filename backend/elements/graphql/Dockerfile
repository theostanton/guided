FROM node:13-slim

# Create app directory
WORKDIR /usr/src/app

COPY dist .

ENV STAGE staging
ENV POSTGRES_HOST staging-database.ridersbible.com
ENV POSTGRES_PORT 5432
ENV OWNER_USER superuser
ENV OWNER_PASSWORD password
ENV POSTGRES_USER guided_postgraphile
ENV POSTGRES_PASSWORD password
ENV POSTGRES_DB main
ENV POSTGRES_SCHEMA public
ENV POSTGRAPHILE_PORT 5000
ENV JWT_SECRET 5a399dba98bb6bf23bcd640d08383342549b8731c1da1a9f9af24514d607c25b
ENV COMPUTE_QUEUE_NAME compute-stage-staging

EXPOSE 80
CMD [ "node", "server.js" ]
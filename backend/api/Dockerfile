FROM node:12-alpine as builder

# Environment

WORKDIR /app

EXPOSE 4000

# Dependencies

COPY package.json /app
COPY yarn.lock /app
COPY lerna.json /app/

COPY backend/api/package.json /app/backend/api/
COPY backend/api/yarn.lock /app/backend/api/

COPY backend/common/package.json /app/backend/common/
COPY backend/common/yarn.lock /app/backend/common/

RUN npx lerna bootstrap -- --ignore-scripts --production --no-optional --nohoist=*

# Build

COPY . /app
RUN cd backend/common && npx  -p typescript tsc
RUN cd backend/api && npx  -p typescript tsc

# Serve

FROM node:12-alpine
COPY --from=builder /app/ /app

CMD [ "yarn", "start:api:prod" ]
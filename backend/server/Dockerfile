FROM node:12-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn
RUN yarn global add ts-node
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "yarn", "start:dev" ]
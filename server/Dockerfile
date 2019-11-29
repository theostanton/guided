FROM node:10

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn
RUN yarn global add ts-node
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 4000

CMD [ "yarn", "start:prod" ]


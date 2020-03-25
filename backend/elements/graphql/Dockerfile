FROM node:13-slim

# Create app directory
WORKDIR /usr/src/app

COPY dist .

EXPOSE 5000
CMD [ "node", "server.js" ]
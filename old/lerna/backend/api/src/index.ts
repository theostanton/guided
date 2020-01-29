import {createServer} from "http";

console.log('Starting');

import {Express} from "express";

import arena from './events/arena'
const express = require('express');
import compression from 'compression';
import {server} from './graphql'
import cors from 'cors';
import {subscribe} from "./events";

const PORT=4000;

const app: Express = express();

app.use('*', cors());
app.use(compression());
app.use('/arena',arena);
server.applyMiddleware({app, path: '/graphql'});

const subscriptionServer = createServer(app);

server.installSubscriptionHandlers( subscriptionServer);

subscriptionServer.listen(PORT,()=>{
    console.log(`🚀 subscriptionServer Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    console.log(`🚀 subscriptionServer Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
});
console.log('Running a GraphQL API api at localhost:4000/graphql');

subscribe().then().catch();
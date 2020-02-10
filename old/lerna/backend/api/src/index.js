"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
console.log('Starting');
const arena_1 = __importDefault(require("./events/arena"));
const express = require('express');
const compression_1 = __importDefault(require("compression"));
const graphql_1 = require("./graphql");
const cors_1 = __importDefault(require("cors"));
const events_1 = require("./events");
const PORT = 4000;
const app = express();
app.use('*', cors_1.default());
app.use(compression_1.default());
app.use('/arena', arena_1.default);
graphql_1.server.applyMiddleware({ app, path: '/graphql' });
const subscriptionServer = http_1.createServer(app);
graphql_1.server.installSubscriptionHandlers(subscriptionServer);
subscriptionServer.listen(PORT, () => {
    console.log(`🚀 subscriptionServer Server ready at http://localhost:${PORT}${graphql_1.server.graphqlPath}`);
    console.log(`🚀 subscriptionServer Subscriptions ready at ws://localhost:${PORT}${graphql_1.server.subscriptionsPath}`);
});
console.log('Running a GraphQL API api at localhost:4000/graphql');
events_1.subscribe().then().catch();

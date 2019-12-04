"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
console.log('Starting');
var arena_1 = __importDefault(require("./events/arena"));
var express = require('express');
var compression_1 = __importDefault(require("compression"));
var graphql_1 = require("./graphql");
var cors_1 = __importDefault(require("cors"));
var events_1 = require("./events");
var PORT = 4000;
var app = express();
app.use('*', cors_1.default());
app.use(compression_1.default());
app.use('/arena', arena_1.default);
graphql_1.server.applyMiddleware({ app: app, path: '/graphql' });
var subscriptionServer = http_1.createServer(app);
graphql_1.server.installSubscriptionHandlers(subscriptionServer);
subscriptionServer.listen(PORT, function () {
    console.log("\uD83D\uDE80 subscriptionServer Server ready at http://localhost:" + PORT + graphql_1.server.graphqlPath);
    console.log("\uD83D\uDE80 subscriptionServer Subscriptions ready at ws://localhost:" + PORT + graphql_1.server.subscriptionsPath);
});
console.log('Running a GraphQL API api at localhost:4000/graphql');
events_1.subscribe().then().catch();

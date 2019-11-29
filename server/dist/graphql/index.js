"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
var apollo_server_express_1 = require("apollo-server-express");
var graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
var typeDefs = require('./schema.graphql');
var resolverMap_1 = __importDefault(require("./resolverMap"));
var schema = apollo_server_express_1.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolverMap_1.default,
});
exports.server = new apollo_server_express_1.ApolloServer({
    schema: schema,
    validationRules: [graphql_depth_limit_1.default(7)],
});

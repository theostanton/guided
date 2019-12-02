import 'graphql-import-node';

import {ApolloServer, makeExecutableSchema} from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import {GraphQLSchema} from "graphql";

const typeDefs = require('./schema.graphql');

import resolvers from './resolvers';
import Mutation from './mutators';
import {Subscription} from './subscriptions';

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers: {
        ...resolvers,
        Mutation,
        Subscription
    }
});

export const server = new ApolloServer({
    schema,
    debug: true,
    tracing: true,
    validationRules: [depthLimit(7)],
    subscriptions: {
        onConnect: (connectionParams, webSocket) => {
            console.log('onConnect connectionParams=', connectionParams)
        }
    }
});
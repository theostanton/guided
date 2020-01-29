import {ApolloServer, makeExecutableSchema} from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import {GraphQLSchema} from "graphql";

import {schema} from '@guided/common'

import resolvers from './resolvers';
import Mutation from './mutators';
import {Subscription} from './subscriptions';

export const executableSchema: GraphQLSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: {
        ...resolvers,
        Mutation,
        Subscription
    }
});

export const server = new ApolloServer({
    schema: executableSchema,
    debug: true,
    tracing: true,
    validationRules: [depthLimit(7)],
    subscriptions: {
        onConnect: (connectionParams, webSocket) => {
            console.log('onConnect connectionParams=', connectionParams)
        }
    }
});
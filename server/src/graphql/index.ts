import 'graphql-import-node';

import {ApolloServer, makeExecutableSchema} from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import {GraphQLSchema} from "graphql";

const typeDefs = require('./schema.graphql');

import resolvers from './resolvers';
import Mutation from './mutators';
resolvers['Mutation'] = Mutation

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers: {
        ...resolvers
    }
});

export const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
});

import {ApolloServer} from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';

const schema = require('./schema');


export const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
});

import {Express} from "express";

const express = require('express');
const graphqlHTTP = require('express-graphql');
const {buildSchema} = require('graphql');

// Construct a schema, using GraphQL schema language
// language=GraphQL
const schema = buildSchema(`
    type Number {
        one: Int
        two: String
    }
    type Query {
        hello: String
        goodbye: String
        number(base: Int):Number
    }
`);

async function hello(): Promise<string> {
    return new Promise((resolve, reject) => {
        resolve("LOL?")
    });
}

function two(): string {
    return "Two"
}

function number({base}: { base: number }): { one: () => number, two: () => string } {
    console.log('base', base);
    return {
        one: () => {
            return base * 4
        },
        two
    }
}

// The root provides a resolver function for each API endpoint
const root = {
    hello,
    number,
    goodbye: () => {
        return 'bye world!';
    },
};

const app: Express = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    pretty: true
}));

app.listen(4000, '0.0.0.0');
console.log('Running a GraphQL API server at localhost:4000/graphql');
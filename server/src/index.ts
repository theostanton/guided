import {Express} from "express";

const express = require('express');
import compression from 'compression';
import {server} from './graphql'
import cors from 'cors';

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

app.use('*', cors());
app.use(compression());
server.applyMiddleware({app, path: '/graphql'});

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
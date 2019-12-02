console.log('Starting');

import {Express} from "express";

const express = require('express');
import compression from 'compression';
import {server} from './graphql'
import cors from 'cors';

const app: Express = express();

app.use('*', cors());
app.use(compression());
server.applyMiddleware({app, path: '/graphql'});

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
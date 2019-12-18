"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
var common_1 = require("@guided/common");
var resolvers_1 = __importDefault(require("./resolvers"));
var mutators_1 = __importDefault(require("./mutators"));
var subscriptions_1 = require("./subscriptions");
exports.executableSchema = apollo_server_express_1.makeExecutableSchema({
    typeDefs: common_1.schema,
    resolvers: __assign(__assign({}, resolvers_1.default), { Mutation: mutators_1.default,
        Subscription: subscriptions_1.Subscription })
});
exports.server = new apollo_server_express_1.ApolloServer({
    schema: exports.executableSchema,
    debug: true,
    tracing: true,
    validationRules: [graphql_depth_limit_1.default(7)],
    subscriptions: {
        onConnect: function (connectionParams, webSocket) {
            console.log('onConnect connectionParams=', connectionParams);
        }
    }
});

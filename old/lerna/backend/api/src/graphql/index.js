"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const common_1 = require("@guided/common");
const resolvers_1 = __importDefault(require("./resolvers"));
const mutators_1 = __importDefault(require("./mutators"));
const subscriptions_1 = require("./subscriptions");
exports.executableSchema = apollo_server_express_1.makeExecutableSchema({
    typeDefs: common_1.schema,
    resolvers: {
        ...resolvers_1.default,
        Mutation: mutators_1.default,
        Subscription: subscriptions_1.Subscription
    }
});
exports.server = new apollo_server_express_1.ApolloServer({
    schema: exports.executableSchema,
    debug: true,
    tracing: true,
    validationRules: [graphql_depth_limit_1.default(7)],
    subscriptions: {
        onConnect: (connectionParams, webSocket) => {
            console.log('onConnect connectionParams=', connectionParams);
        }
    }
});
//# sourceMappingURL=index.js.map
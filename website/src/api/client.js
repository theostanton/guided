"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_boost_1 = require("apollo-boost");
const apollo_link_context_1 = require("apollo-link-context");
const node_fetch_1 = __importDefault(require("node-fetch"));
const store_1 = __importDefault(require("store"));
exports.USER_KEY = "guidedUser";
const link = new apollo_boost_1.HttpLink({
    uri: "https://7t8ksz339f.execute-api.eu-west-2.amazonaws.com/staging/graphql",
    fetch: node_fetch_1.default,
});
const authLink = apollo_link_context_1.setContext((_, { headers }) => {
    try {
        const value = store_1.default.get(exports.USER_KEY);
        if (value) {
            const user = JSON.parse(value);
            return {
                headers: {
                    ...headers,
                    authorization: `Bearer ${user.bearerToken}`,
                },
            };
        }
    }
    catch (e) {
        console.error(e);
    }
    return {
        headers,
    };
});
exports.default = new apollo_boost_1.ApolloClient({
    link: authLink.concat(link),
    cache: new apollo_boost_1.InMemoryCache(),
});
//# sourceMappingURL=client.js.map
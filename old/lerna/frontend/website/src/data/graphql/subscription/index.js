"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_link_1 = require("apollo-link");
const apollo_link_http_1 = require("apollo-link-http");
const apollo_link_ws_1 = require("apollo-link-ws");
const apollo_utilities_1 = require("apollo-utilities");
const httpLink = new apollo_link_http_1.HttpLink({
    uri: "http://localhost:3000/graphql",
});
const wsLink = new apollo_link_ws_1.WebSocketLink({
    uri: `ws://localhost:5000/`,
    options: {
        reconnect: true,
    },
});
const link = apollo_link_1.split(({ query }) => {
    const definition = apollo_utilities_1.getMainDefinition(query);
    return (definition.kind === "OperationDefinition" &&
        definition.operation === "subscription");
}, wsLink, httpLink);
//# sourceMappingURL=index.js.map
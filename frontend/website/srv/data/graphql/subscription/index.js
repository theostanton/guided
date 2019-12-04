"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_link_1 = require("apollo-link");
const apollo_link_http_1 = require("apollo-link-http");
const apollo_link_ws_1 = require("apollo-link-ws");
const apollo_utilities_1 = require("apollo-utilities");
// Create an http link:
const httpLink = new apollo_link_http_1.HttpLink({
    uri: "http://localhost:3000/graphql",
});
// Create a WebSocket link:
const wsLink = new apollo_link_ws_1.WebSocketLink({
    uri: `ws://localhost:5000/`,
    options: {
        reconnect: true,
    },
});
// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = apollo_link_1.split(
// split based on operation type
({ query }) => {
    const definition = apollo_utilities_1.getMainDefinition(query);
    return (definition.kind === "OperationDefinition" &&
        definition.operation === "subscription");
}, wsLink, httpLink);
//# sourceMappingURL=index.js.map
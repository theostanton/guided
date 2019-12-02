import ApolloClient from "apollo-boost";
import addStayFromLatLong from "./addStayFromLatLng";
import addStayFromAddress from "./addStayFromAddress";

export const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",

});

export {
    addStayFromLatLong,
    addStayFromAddress
}
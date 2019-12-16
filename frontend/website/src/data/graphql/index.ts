import ApolloClient from "apollo-boost";
import addStayFromLatLong from "./addStayFromLatLng";
import addStayFromAddress from "./addStayFromAddress";
import moveStay from "./moveStay";
import deleteStay from "./deleteStay";
import updateStay from "./updateStay";
import deleteAllStays from "./deleteAllStays";

export const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",

});

export {
    addStayFromLatLong,
    addStayFromAddress,
    moveStay,
    updateStay,
    deleteStay,
    deleteAllStays
}
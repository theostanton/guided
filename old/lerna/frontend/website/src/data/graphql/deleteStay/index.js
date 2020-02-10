"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const apollo_boost_1 = require("apollo-boost");
const MUTATION = apollo_boost_1.gql `
    mutation DeleteStay($stayId:ID!){
        deleteStay(stayId: $stayId){
            id
        }
    }
`;
async function default_1(variables) {
    const result = await index_1.client.mutate({
        mutation: MUTATION,
        variables,
    });
    console.log("result", result);
}
exports.default = default_1;

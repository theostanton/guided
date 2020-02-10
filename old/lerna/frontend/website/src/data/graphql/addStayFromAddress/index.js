"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const apollo_boost_1 = require("apollo-boost");
const QUERY = apollo_boost_1.gql `
    mutation AddStay($guideId:ID!,$address:AddressInput!,$label:String,$locked:Boolean){
        addStayFromAddress(guideId:$guideId,address:$address,label:$label,locked:$locked){
            id
        }
    }
`;
async function default_1(input) {
    await index_1.client.query({
        query: QUERY,
        variables: input,
    });
}
exports.default = default_1;

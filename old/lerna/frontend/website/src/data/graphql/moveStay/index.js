"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const apollo_boost_1 = require("apollo-boost");
const MUTATION = apollo_boost_1.gql `
    mutation MoveStay($locationId:ID!,$lat:Float!,$long:Float!){
        moveStay(locationId:$locationId,lat:$lat,long:$long){
            id
        }
    }
`;
async function default_1(locationId, lat, long) {
    const result = await index_1.client.mutate({
        mutation: MUTATION,
        variables: {
            locationId,
            lat,
            long,
        },
    });
    console.log("result", result);
}
exports.default = default_1;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const apollo_boost_1 = require("apollo-boost");
const MUTATION = apollo_boost_1.gql `
    mutation AddStay($guideId:ID!,$lat:Float!,$long:Float,$label:String,$locked:Boolean){
        addStayFromLagLng(guideId:$guideId,lat:$lat,long:$long,label:$label,locked:$locked){
            id
        }
    }
`;
async function default_1(guideId, lat, long, label = undefined, locked = false) {
    const result = await index_1.client.mutate({
        mutation: MUTATION,
        variables: {
            guideId,
            lat,
            long,
            label,
            locked,
        },
    });
    console.log("result", result);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
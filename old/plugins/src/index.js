"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { makeExtendSchemaPlugin, gql, } = require("graphile-utils");
console.log("importing plugin?");
console.log(makeExtendSchemaPlugin);
const generator = (build) => {
    console.log("build");
    return {
        typeDefs: gql `
        input SpotFromLatLngInput{
            lat:Float!
            lng:Float!
        }
        type AddSpotFromLatLngPayload{
            lat:Float!
            lng:Float!
        }
        extend type Mutation {
            addSpotFromLatLng(input:SpotFromLatLngInput!):AddSpotFromLatLngPayload
        }
    `,
        resolvers: {
            Mutation: {
                addSpotFromLatLng: async (_query, args, context, resolveInfo) => {
                    const input = args.input;
                    return {
                        lat: 0.0,
                        lng: 1.1,
                    };
                },
            },
        },
    };
};
module.exports = makeExtendSchemaPlugin(generator);

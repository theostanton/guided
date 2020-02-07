import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"

const {
  makeExtendSchemaPlugin,
  gql,
} = require("graphile-utils")

import { Build, Options } from "graphile-build"
import { SpotFromLatLngInput } from "./generated"

console.log("importing plugin?")
console.log(makeExtendSchemaPlugin)

const generator: (build: Build, schemaOptions: Options) => ExtensionDefinition = (build: Build) => {
  console.log("build")
  return {
    typeDefs: gql`
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
          const input: SpotFromLatLngInput = args.input
          // console.log(JSON.stringify(context, null, 4))
          return {
            lat: 0.0,
            lng: 1.1,
          }
        },
      },
    },
  }
}

module.exports = makeExtendSchemaPlugin(generator)

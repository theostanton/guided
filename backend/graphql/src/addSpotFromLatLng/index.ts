import { log } from "@guided/logger"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"

const generator: ExtensionDefinition = {
  typeDefs: gql`
      extend type Mutation {
          addSpotFromLatLng(guideId:String!):Spot!
      }
  `,
  resolvers: {
    Mutation: {
      addSpotFromLatLng: async (_query) => {
        log(_query, "_query")
        return "Some value"
      },
    },
  },
}

export default makeExtendSchemaPlugin(generator)
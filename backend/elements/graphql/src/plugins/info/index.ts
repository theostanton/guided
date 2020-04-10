import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")

async function appVersion(): Promise<string> {
  return process.env.APP_VERSION || "NA"
}

const generator: ExtensionDefinition = {
  typeDefs: gql`
      extend type Query {
          appVersion:String!
      }
  `,
  resolvers: {
    Query: {
      appVersion,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
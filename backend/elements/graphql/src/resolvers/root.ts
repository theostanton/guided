import { PluginProvider } from "./Resolver"
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { gql } from "graphile-utils"

export default class RootResolver implements PluginProvider {
  plugin(): ExtensionDefinition {
    return {
      resolvers: {
        Query: {
          appVersion: () => {
            return process.env.APP_VERSION
          },
        },
      },
      typeDefs: gql`
          type Result {
              success:Boolean!
              message:String
          }
          extend type Query {
              appVersion:String!
          }
      `,
    }
  }

}
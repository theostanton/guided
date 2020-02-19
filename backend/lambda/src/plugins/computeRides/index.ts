import { logJson } from "@guided/logger"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationComputeRidesArgs } from "../../generated"
import { execute } from "@guided/compute-rides"


async function computeRides(_: any, args: MutationComputeRidesArgs): Promise<string> {
  logJson(args, "computeRides args")

  const { guideId } = args

  const result = await execute({ guideId })

  if (result.success) {
    return "Success"
  } else {
    return "Failed"
  }
}


const generator: ExtensionDefinition = {
  typeDefs: gql`
      extend type Mutation {
          computeRides(guideId:String!):String!
      }
  `,
  resolvers: {
    Mutation: {
      computeRides,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
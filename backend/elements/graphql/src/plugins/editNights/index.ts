import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationEditNightsArgs } from "../../generated"
import { Context } from "../types"
import { database, Spot, updateOne } from "@guided/database"
import ammendDates from "@guided/compute/srv/trigger/ammendDates"
import { logJson } from "@guided/logger"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")

async function editNights(_: any, args: MutationEditNightsArgs, context: Context): Promise<{ success: boolean, message: string }> {

  const spot = await database.oneOrNone("select * from spots where id=$1", [args.spotId])

  if (!spot) {
    return {
      success: false,
      message: `No spot for id=${args.spotId}`,
    }
  }

  const updateQuery = updateOne<Spot>("spots", {
    id: args.spotId,
    nights: args.nights,
  })

  logJson(updateQuery, "updateQuery")

  await database.none(updateQuery)

  const guide = await database.selectGuide(spot!.guide)
  await ammendDates(guide)

  return {
    success: true,
    message: `Set nights to ${args.nights}`,
  }

}

const generator: ExtensionDefinition = {
  typeDefs: gql`
      extend type Mutation {
          editNights(spotId:String!,nights:Int!):Result!
      }
  `,
  resolvers: {
    Mutation: {
      editNights,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
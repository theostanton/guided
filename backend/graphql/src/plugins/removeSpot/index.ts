import { logJson } from "@guided/logger"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationMoveSpotArgs } from "../../generated"
import { database, Spot } from "@guided/database"
import * as computeRides from "@guided/compute-rides"


async function removeSpot(_: any, args: MutationMoveSpotArgs): Promise<Partial<Spot>> {
  logJson(args, "removeSpot args")
  const { spotId } = args

  const { guideId, locked } = await database.one<{ guideId: string, locked: boolean }>(
      `SELECT guide as "guideId", locked
       from guided.spots
       where id = $1`, [spotId])

  if (!locked) {
    throw new Error("Can only remove locked spots")
  }

  await database.none(`DELETE
                       from guided.spots
                       where id = $1`, [spotId])

  await computeRides.execute({
    guideId,
  })

  return {
    id: spotId,
  }
}


const generator: ExtensionDefinition = {
  typeDefs: gql`
      extend type Mutation {
          removeSpot(spotId:String!):Spot!
      }
  `,
  resolvers: {
    Mutation: {
      removeSpot,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
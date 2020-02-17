import { log, logJson } from "@guided/logger"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationMoveSpotArgs } from "../../generated"
import { database, Spot } from "@guided/database"
import * as computeRides from "@guided/compute-rides"
import { executeSequentially } from "@guided/utils"

async function removeSpot(_: any, args: MutationMoveSpotArgs): Promise<Partial<Spot>> {
  logJson(args, "removeSpot args")
  const { spotId } = args

  const { guideId, locked } = await database.one<{ guideId: string, locked: boolean }>(
      `SELECT guide as "guideId", locked
       from spots
       where id = $1`, [spotId])

  if (!locked) {
    throw new Error("Can only remove locked spots")
  }

  const stages = await database.manyOrNone<{ stageId: string }>(`SELECT id as "stageId"
                                                                 from stages
                                                                 where to_spot = $1
                                                                    or from_spot = $1`, [spotId])

  await executeSequentially(stages, async ({ stageId }: { stageId: string }) => {
    log(`Deleting info for ${stageId}`)
    await database.none(`DELETE
                         from rides
                         where stage = $1`, [stageId])
    await database.none(`DELETE
                         from stages
                         where id = $1`, [stageId])
    await database.none(`DELETE
                         from spots
                         where stage = $1`, [stageId])
    log(`Done deleting info for ${stageId}`)
  })

  log(`Deleting spot spotId=${spotId}`)
  await database.none(`DELETE
                       from spots
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
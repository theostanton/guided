import { logJson } from "@guided/logger"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationMoveSpotArgs } from "../../generated"
import { database, generateId, Ride, Spot } from "@guided/database"
import * as computeStage from "@guided/compute-stage"
import { getInfo } from "@guided/google"
import { executeConcurrently } from "@guided/utils"

async function deleteStaleStages(spotId: string): Promise<void> {
  const rides = await database.manyOrNone<Ride>("SELECT stage from rides where from_spot=$1 or to_spot=$1", [spotId])
  let oldStageIds = rides.map((ride: Ride) => {
    return ride.stage
  })
  logJson(oldStageIds, "oldStageIds")
  await executeConcurrently(oldStageIds, async (stageId: string) => {

    await database.tx(transaction => {
      return transaction.batch(
        [
          database.none("DELETE from rides where stage=$1", [stageId]),
          database.none("DELETE from spots where stage=$1", [stageId]),
          database.none("DELETE from stages where id=$1", [stageId]),
        ],
      )
    })

  })
}

async function moveSpot(_: any, args: MutationMoveSpotArgs): Promise<Partial<Spot>> {
  logJson(args, "moveSpot args")
  const { spotId, lat, long } = args

  await deleteStaleStages(spotId)

  const spot = await database.one<Spot>("SELECT * from spots where id=$1", [spotId])

  const { label, countryCode } = await getInfo(lat, long)

  const newId = generateId("spot")

  await database.none(`
      update guided.spots
      set lat=$1,
          long=$2,
          location=$3,
          country=$4,
          id=$5,
          stage=null,
          locked = true,
          updated=$7
      where id = $6
  `, [lat, long, label, countryCode, newId, spotId, new Date()])

  //TODO
  // await computeStage.execute({
  //   stageId: "",
  // })

  return {
    id: spotId,
  }
}


const generator: ExtensionDefinition = {
  typeDefs: gql`
      extend type Mutation {
          moveSpot(spotId:String!,lat:Float!,long:Float!):Spot!
      }
  `,
  resolvers: {
    Mutation: {
      moveSpot,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
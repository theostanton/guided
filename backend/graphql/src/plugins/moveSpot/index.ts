import { logJson } from "@guided/logger"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationMoveSpotArgs } from "../../generated"
import { database, Spot } from "@guided/database"
import * as computeRides from "@guided/compute-rides"
import { getLabel } from "@guided/google"


async function moveSpot(_: any, args: MutationMoveSpotArgs): Promise<Partial<Spot>> {
  logJson(args, "moveSpot args")
  const { spotId, lat, long } = args

  const spot = await database.one<Spot>("SELECT * FROM guided.spots where id=$1", [spotId])

  const location = getLabel(lat, long)

  await database.none(`
      update guided.spots
      set lat=$1,
          long=$2,
          location=$3,
          locked= true
      where id = $4
  `, [lat, long, location, spotId])

  await computeRides.execute({
    guideId: spot.guide,
  })

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
import { logJson } from "@guided/logger"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationMoveSpotArgs } from "../../generated"
import { database, generateId, Spot } from "@guided/database"
import { getInfo } from "@guided/google"
import * as computeStage from "@guided/compute"
import { Packet } from "@guided/compute"

async function moveSpot(_: any, args: MutationMoveSpotArgs): Promise<Partial<Spot>> {
  logJson(args, "moveSpot args")
  const { spotId, lat, long } = args

  const spot = await database.one<Spot>("SELECT * from spots where id=$1", [spotId])

  const { label, countryCode } = await getInfo(lat, long)

  const newId = generateId("spot")

  await database.none(`
      update spots
      set lat=$1,
          long=$2,
          location=$3,
          country=$4,
          stage=null,
          locked = true,
          updated=$7
      where id = $6
  `, [lat, long, label, countryCode, newId, spotId, new Date()])


  const packet: Packet = await computeStage.prepare(spot.guide)

  await computeStage.trigger(packet)

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
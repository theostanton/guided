import { logJson } from "@guided/logger"

import { getInfo } from "@guided/google"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationAddSpotFromLatLngArgs } from "../../generated"
import { database, generateId, Spot } from "@guided/database"
import { Context } from "../types"
import * as computeStage from "@guided/compute"
import { Packet } from "@guided/compute"

export async function prepare(args: MutationAddSpotFromLatLngArgs, owner: string): Promise<{
  spotId: string,
  packet: Packet
}> {
  const { lockedSpotsCount } = await database.one(`SELECT count(1) as "lockedSpotsCount"
                                                   from spots
                                                   where guide = $1
                                                     and locked = true`, [args.guideId])
  logJson(lockedSpotsCount, "lockedSpotsCount")

  const { label: location, countryCode: country } = await getInfo(args.lat, args.long)

  const spotId = generateId("spot")

  const spot: Spot = {
    id: spotId,
    guide: args.guideId,
    label: args.label || null,
    owner,
    lat: args.lat,
    date: null,
    long: args.long,
    nights: args.nights,
    position: `${parseInt(lockedSpotsCount)}.0`,
    location,
    country,
    locked: true,
    stage: null,
    created: new Date(),
    updated: null,
  }

  await database.insertSpot(spot)

  const packet = await computeStage.prepare(args.guideId)

  return {
    spotId,
    packet,
  }
}

async function addSpotFromLatLng(_: any, args: MutationAddSpotFromLatLngArgs, context: Context): Promise<{ id: string }> {
  logJson(args, "addSpotFromLatLng args")

  const { spotId, packet } = await prepare(args, context.jwtClaims.username!)
  await computeStage.trigger(packet)

  return { id: spotId }
}

const generator: ExtensionDefinition = {
  typeDefs: gql`
      type Result {
          success:Boolean!
      }
      extend type Mutation {
          addSpotFromLatLng(guideId:String!,lat:Float!,long:Float!,label:String,nights:Int!):Spot!
      }
  `,
  resolvers: {
    Mutation: {
      addSpotFromLatLng,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
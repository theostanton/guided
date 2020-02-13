import { logJson } from "@guided/logger"

import { getInfo } from "@guided/google"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationAddSpotFromLatLngArgs } from "../../generated"
import { database, generateId, Spot } from "@guided/database"
import { Context } from "../types"
import * as computeRides from "@guided/compute-rides"


async function addSpotFromLatLng(_: any, args: MutationAddSpotFromLatLngArgs, context: Context): Promise<Partial<Spot>> {
  logJson(args, "addSpotFromLatLng args")

  const { spotCount } = await database.one(`SELECT count(1) as "spotCount"
                                            from guided.spots
                                            where guide = $1`, [args.guideId])
  logJson(spotCount, "spotCount")

  const { label: location, countryCode: country } = await getInfo(args.lat, args.long)

  const spot: Spot = {
    id: generateId("spot"),
    guide: args.guideId,
    label: args.label ? args.label : location,
    owner: context.jwtClaims.username!,
    lat: args.lat,
    long: args.long,
    nights: 0,
    position: `${parseInt(spotCount) + 1}`,
    location,
    country,
    locked: true,
  }

  await database.insertSpot(spot)


  await computeRides.execute({
    guideId: args.guideId,
  })
  return spot
}


const generator: ExtensionDefinition = {
  typeDefs: gql`
      type Result{
          success:Boolean!
      }
      extend type Mutation {
          addSpotFromLatLng(guideId:String!,lat:Float!,long:Float!,label:String):Spot!
      }
  `,
  resolvers: {
    Mutation: {
      addSpotFromLatLng,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
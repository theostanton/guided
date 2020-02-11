import { logJson } from "@guided/logger"

import { getLabel } from "@guided/google"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationAddSpotFromLatLngArgs, Spot } from "../../generated"
import { database, generateId } from "@guided/database"
import { Context } from "../types"


async function addSpotFromLatLng(_: any, args: MutationAddSpotFromLatLngArgs, context: Context): Promise<Partial<Spot>> {
  logJson(args, "addSpotFromLatLng args")

  const label = await getLabel(args.lat, args.long)
  const spot = {
    id: generateId("spot"),
    guide: args.guideId,
    label: args.label ? args.label : label,
    owner: context.jwtClaims.username!,
    lat: args.lat,
    long: args.long,
    nights: 0,
    locked: true,
  }

  await database.insertSpot(spot)

  return spot
}


const generator: ExtensionDefinition = {
  typeDefs: gql`
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
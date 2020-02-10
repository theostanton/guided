import { logJson } from "@guided/logger"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationAddSpotFromLatLngArgs, Spot } from "../../generated"
import { database, generateId } from "@guided/database"


async function addSpotFromLatLng(_: any, args: MutationAddSpotFromLatLngArgs): Promise<Partial<Spot>> {
  logJson(args, "args")

  const spot = {
    id: generateId("spot"),
    guide: args.guideId,
    label: args.label ? args.label : null,
    owner: args.owner ? args.owner : "user1",
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
          addSpotFromLatLng(guideId:String!,lat:Float!,long:Float!,label:String,owner:String):Spot!
      }
  `,
  resolvers: {
    Mutation: {
      addSpotFromLatLng,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
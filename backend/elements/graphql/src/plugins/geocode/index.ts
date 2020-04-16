import { logJson } from "@guided/logger"
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { QueryGeocodeArgs, Geocode, GeocodeResponse } from "../../generated"
import { Context } from "../types"
import { client } from "@guided/google"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")

export async function geocode(_: any, args: QueryGeocodeArgs, context: Context): Promise<GeocodeResponse> {
  logJson(args, "geocode args")

  const { data } = await client.geocode({
    params: {
      key: process.env.GOOGLE_KEY!,
      address: args.query,
    },
  })

  const geocodes: Geocode[] = data.results.map((result) => {


    let label: string = result.formatted_address
    let countryCode: string = ""
    result.address_components.forEach(component => {
      if (component.types.includes("country")) {
        countryCode = component.short_name
      }
      if (component.types.includes("locality")) {
        label = component.short_name
      }
    })

    return {
      latitude: result.geometry.location.lat,
      longitude: result.geometry.location.lng,
      countryCode,
      label: result.formatted_address,
    }
  })
  return {
    success: true,
    geocodes,
  }
}


const generator: ExtensionDefinition = {
  typeDefs: gql`
      extend type Query {
          geocode(query:String!):GeocodeResponse!
      }
      type Geocode {
          countryCode:String!
          latitude:Float!
          longitude:Float!
          label:String!
      }
      type GeocodeResponse{
          success:Boolean!
          geocodes:[Geocode]
      }
  `,
  resolvers: {
    Query: {
      geocode,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
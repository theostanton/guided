import { logJson } from "@guided/logger"

import { getInfo } from "@guided/google"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import {
  CreateGuideWithSpotsResult,
  MutationCreateGuideWithSpotsArgs,
} from "../../generated"
import { Context } from "../types"
import slugify from "slugify"
import { database, generateId, Guide, insertMany, insertOne, Spot } from "@guided/database"
import * as computeStage from "@guided/compute"

async function createGuideWithSpots(_: any, args: MutationCreateGuideWithSpotsArgs, context: Context): Promise<CreateGuideWithSpotsResult> {
  logJson(args, "addSpotFromLatLng args")

  const { title, isCircular, startDate, maxHoursPerRide, type } = args.input!

  if (!context.jwtClaims || !context.jwtClaims.username) {
    return {
      success: false,
      error: "Not logged in",
    }
  }

  const owner = context.jwtClaims.username
  const slug = slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@_]/g,
  })
  const guideId = `${owner}_${slug}`

  const guide: Guide = {
    id: guideId,
    slug,
    title,
    owner,
    is_circular: isCircular,
    start_date: startDate || null,
    max_hours_per_ride: maxHoursPerRide,
    transport_type: type,
    created: new Date(),
    updated: null,
  }

  logJson(guide, "guide")

  const result = await database.oneOrNone<{ title: string }>("select title from guides where id=$1", [guideId])

  if (result) {
    return {
      success: false,
      error: `Guide already exists called '${result.title}'`,
    }
  }

  try {
    const result = await database.insertOne<Guide>("guides", guide)
    if (!result.id) {
      return {
        success: false,
        error: "Failed to create guide",
      }
    }
  } catch (e) {
    return {
      success: false,
      error: e.message,
    }
  }

  const spots: Spot[] = args.input!.spots.map((spot, index) => {
    return {
      id: generateId("spot"),
      nights: spot.nights,
      position: `${index}.0`,
      date: null,
      locked: true,
      country: spot.country,
      location: spot.location,
      stage: null,
      owner,
      label: spot.label,
      guide: guideId,
      long: spot.long,
      lat: spot.lat,
      created: new Date(),
      updated: null,
    }
  })

  if (spots.length > 0) {
    try {
      const results = await database.insertMany<Spot>("spots", spots)

      const failed = results.some(result => {
        return !result.id
      })
      if (failed) {
        return {
          success: false,
          error: "Failed to create spots",
        }
      }
    } catch (e) {
      return {
        success: false,
        error: e.message,
      }
    }
  }

  const packet = await computeStage.prepare(guideId)
  await computeStage.trigger(packet)

  return {
    success: true,
    guideId,
  }
}

const generator: ExtensionDefinition = {
  typeDefs: gql`
      input CreateGuideWithSpotsInput{
          title:String!
          isCircular:Boolean!
          maxHoursPerRide:Int!
          type:TransportType!
          spots:[CreateGuideWithSpotInput!]!
          startDate:String
      }
      type CreateGuideWithSpotsResult{
          success:Boolean!
          error:String
          guideId:ID
      }

      input CreateGuideWithSpotInput{
          label:String!
          nights:Int!
          lat:Float!
          long:Float!
          location:String!
          country:String!
      }
      extend type Mutation {
          createGuideWithSpots(input:CreateGuideWithSpotsInput):CreateGuideWithSpotsResult!
      }
  `,
  resolvers: {
    Mutation: {
      createGuideWithSpots,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
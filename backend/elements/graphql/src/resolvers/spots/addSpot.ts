import { Mutation } from "../Resolver"
import { AddSpotInput, AddSpotResult, MutationAddSpotArgs } from "generated"
import { gql } from "graphile-utils"
import { Context } from "model/context"
import { logJson } from "@guided/logger"
import * as computeStage from "@guided/compute"
import { Packet } from "@guided/compute"
import { database, generateId, Spot } from "@guided/database"
import { getInfo } from "@guided/google"

export async function prepare(input: AddSpotInput, owner: string): Promise<{
  spotId: string,
  packet: Packet
}> {
  const { lockedSpotsCount } = await database.one(`SELECT count(1) as "lockedSpotsCount"
                                                   from spots
                                                   where guide = $1
                                                     and locked = true`, [input.guideId])
  logJson(lockedSpotsCount, "lockedSpotsCount")

  const { label: location, countryCode: country } = await getInfo(input.lat, input.long)

  const spotId = generateId("spot")

  const spot: Spot = {
    id: spotId,
    guide: input.guideId,
    label: input.label || null,
    owner,
    lat: input.lat,
    date: null,
    long: input.long,
    nights: input.nights,
    position: `${parseInt(lockedSpotsCount)}.0`,
    location,
    country,
    locked: true,
    stage: null,
    created: new Date(),
    updated: null,
  }

  await database.insertSpot(spot)

  const packet = await computeStage.prepare(input.guideId)

  return {
    spotId,
    packet,
  }
}

export default class AddSpotMutation extends Mutation<MutationAddSpotArgs, AddSpotResult> {
  name = "addSpot"
  typeDefs = gql`
      input AddSpotInput {
          guideId:String!
          lat:Float!
          long:Float!
          label:String
          nights:Int!
      }

      type AddSpotResult{
          success:Boolean!
          messaage:String
          id:String
      }
      extend type Mutation {
          addSpot(input:AddSpotInput!):AddSpotResult!
      }
  `

  async resolver(args: MutationAddSpotArgs, context: Context): Promise<AddSpotResult> {

    logJson(args.input, "addSpot args.input")

    const { spotId, packet } = await prepare(args.input, context.jwtClaims!.username!)
    await computeStage.trigger(packet)

    return {
      id: spotId,
      success: false,
    }
  }
}
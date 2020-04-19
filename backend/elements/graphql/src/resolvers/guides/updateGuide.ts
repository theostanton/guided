import { gql } from "graphile-utils"
import { Mutation, MutationResult } from "../Resolver"
import { Context } from "../../model/context"
import { Guide, updateOne } from "@guided/database"
import slugify from "slugify"
import { log } from "@guided/logger"
import access from "./access"

export default class UpdateGuideMutation extends Mutation<any, MutationResult> {

  name = "updateGuide"
  typeDefs = gql`
      input UpdateGuidePatch{
          id:ID!
          title:String
          isCircular:Boolean
          maxHoursPerRide:Int
          type:TransportType
      }
      type UpdateGuideResult {
          success:Boolean!
          message:String
          id:ID
      }
      extend type Mutation {
          updateGuide(input:UpdateGuidePatch):UpdateGuideResult!
      }
  `

  async resolver(_: any, args: any, context: Context): Promise<MutationResult> {

    const { title, isCircular, maxHoursPerRide, type, id: previousId } = args.input!

    switch (await access(context, previousId!)) {
      case "read":
      case "denied":
        return {
          success: false,
          message: "Cannot delete this guide",
        }
      case "notLoggedIn":
        return {
          success: false,
          message: "Not logged in",
        }
    }

    const owner = context.jwtClaims.username
    const slug = slugify(title, {
      lower: true,
      remove: /[*+~.()'"!:@_]/g,
    })
    const guideId = `${owner}_${slug}`

    if (previousId) {

      const updateQuery = updateOne<Guide>("guides", {
        title,
        slug,
        id: guideId,
      })
      log(updateQuery, "updateQuery")
      return {
        success: true,
      }
    }
    //
    // const guide: Guide = {
    //   id: guideId,
    //   slug,
    //   title,
    //   owner,
    //   is_circular: isCircular,
    //   start_date: null,
    //   max_hours_per_ride: maxHoursPerRide,
    //   transport_type: type,
    //   created: new Date(),
    //   updated: null,
    // }
    //
    // logJson(guide, "guide")
    //
    // const result = await database.oneOrNone<{ title: string }>("select title from guides where id=$1", [guideId])
    //
    // if (result) {
    //   return {
    //     success: false,
    //     error: `Guide already exists called '${result.title}'`,
    //   }
    // }
    //
    // try {
    //   const result = await database.insertOne<Guide>("guides", guide)
    //   if (!result.id) {
    //     return {
    //       success: false,
    //       error: "Failed to create guide",
    //     }
    //   }
    // } catch (e) {
    //   return {
    //     success: false,
    //     error: e.message,
    //   }
    // }
    //
    // const spots: Spot[] = args.input!.spots.map((spot, index) => {
    //   return {
    //     id: generateId("spot"),
    //     nights: spot.nights,
    //     position: `${index}.0`,
    //     date: null,
    //     locked: true,
    //     country: spot.country,
    //     location: spot.location,
    //     stage: null,
    //     owner,
    //     label: spot.label,
    //     guide: guideId,
    //     long: spot.long,
    //     lat: spot.lat,
    //     created: new Date(),
    //     updated: null,
    //   }
    // })
    //
    // if (spots.length > 0) {
    //   try {
    //     const results = await database.insertMany<Spot>("spots", spots)
    //
    //     const failed = results.some(result => {
    //       return !result.id
    //     })
    //     if (failed) {
    //       return {
    //         success: false,
    //         error: "Failed to create spots",
    //       }
    //     }
    //   } catch (e) {
    //     return {
    //       success: false,
    //       error: e.message,
    //     }
    //   }
    // }
    //
    // const packet = await computeStage.prepare(guideId)
    // await computeStage.trigger(packet)

    return {
      success: true,
    }
  }
}
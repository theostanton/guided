import { Mutation, MutationResult } from "../Resolver"
import { MutationCreateGuideArgs } from "generated"
import { Context } from "model/context"
import { gql } from "graphile-utils"
import slugify from "slugify"
import { database, Guide } from "@guided/database"
import { logJson } from "@guided/logger"

export default class CreateGuideMutation extends Mutation<MutationCreateGuideArgs, MutationResult> {
  name = "createGuide"
  typeDefs = gql`
      input CreateGuideInput{
          title:String!
          isCircular:Boolean!
          maxHoursPerRide:Int!
          type:TransportType!
          startDate:String
      }
      type CreateGuideResult{
          success:Boolean!
          message: String
          guideId:ID
      }
      extend type Mutation {
          createGuide(input:CreateGuideInput):CreateGuideResult!
      }
  `

  async resolver(_: any, args: MutationCreateGuideArgs, context: Context): Promise<MutationResult> {
    const { title, isCircular, startDate, maxHoursPerRide, type } = args.input!

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
        message: `Guide already exists called '${result.title}'`,
      }
    }

    try {
      const result = await database.insertOne<Guide>("guides", guide)
      if (result && result.id) {
        return {
          success: true,
        }
      } else {
        return {
          success: false,
          message: "Failed to create guide",
        }
      }
    } catch (e) {
      return {
        success: false,
        message: e.message,
      }
    }
  }
}
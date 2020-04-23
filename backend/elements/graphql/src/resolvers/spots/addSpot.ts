import { Mutation } from "../Resolver"
import { AddSpotResult, MutationAddSpotArgs } from "generated"
import { gql } from "graphile-utils"
import { Context } from "model/context"
import { logJson } from "@guided/logger"
import { database } from "@guided/database"
import performAddSpot from "../../actions/spots/add"
import { DENIED } from "../utils/messages"

export default class AddSpotMutation extends Mutation<MutationAddSpotArgs, AddSpotResult> {
  name = "addSpot"
  typeDefs = gql`
      input AddSpotInput {
          guideId:String!
          lat:Float!
          long:Float!
          label:String
          location:String
          country:String
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
    const { owner } = await database.one("select owner from guides where id=$1", [args.input.guideId])

    if (!context.jwtClaims || owner !== context.jwtClaims.username) {
      return {
        success: false,
        messaage: DENIED,
      }
    }

    return performAddSpot(args.input, owner)
  }
}
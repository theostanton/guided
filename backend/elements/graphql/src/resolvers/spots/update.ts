import { Mutation, MutationResult } from "../Resolver"
import { AddSpotResult } from "generated"
import { gql } from "graphile-utils"
import { Context } from "model/context"
import { logJson } from "@guided/logger"
import { MutationUpdateSpotArgs } from "@guided/database/srv/generated"
import performUpdateSpot from "../../actions/spots/update"

export default class UpdateSpotMutation extends Mutation<MutationUpdateSpotArgs, MutationResult> {
  name = "updateSpot"
  typeDefs = gql`
      input UpdateSpotPatch {
          id:String!
          label:String
          nights:Int
          location:UpdateSpotLocationPatch
      }

      input UpdateSpotLocationPatch {
          lat:Float!
          long:Float!
          location:String!
          country:String!
      }

      type UpdateSpotResult{
          success:Boolean!
          message:String
          id:String
          triggeredComputations:Boolean
          ammendedDates:Boolean
      }
      
      extend type Mutation {
          updateSpot(input:UpdateSpotPatch!):UpdateSpotResult!
      }
  `

  async resolver(args: MutationUpdateSpotArgs, context: Context): Promise<AddSpotResult> {
    logJson(args.input, "updateSpot args.input")
    return performUpdateSpot(args.input)
  }
}
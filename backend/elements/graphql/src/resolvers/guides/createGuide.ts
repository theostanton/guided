import { Mutation } from "../Resolver"
import { CreateGuideResult, MutationCreateGuideArgs } from "generated"
import { Context } from "model/context"
import create from "../../actions/guides/create"
import { gql } from "graphile-utils"

export default class CreateGuideMutation extends Mutation<MutationCreateGuideArgs, CreateGuideResult> {

  name = "createGuide"
  typeDefs = gql`
      input CreateGuideInput{
          title:String!
          isCircular:Boolean
          maxHoursPerRide:Int!
          type:TransportType!
          startDate:String
      }
      type CreateGuideResult{
          success:Boolean!
          message: String
          guideId:String
      }
      extend type Mutation {
          createGuide(input:CreateGuideInput):CreateGuideResult!
      }
  `

  async resolver(args: MutationCreateGuideArgs, context: Context): Promise<CreateGuideResult> {
    const owner = context.jwtClaims!.username
    return create(args.input!, owner)
  }
}
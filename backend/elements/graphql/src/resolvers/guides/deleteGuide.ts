import { Mutation } from "../Resolver"
import { Context } from "model/context"
import { gql } from "postgraphile"
import access from "./access"
import { DeleteGuideResult, MutationDeleteGuideArgs } from "generated"
import { NOT_LOGGED_IN } from "../utils/messages"
import deleteGuide from "actions/guides/delete"


export default class DeleteGuideMutation extends Mutation<MutationDeleteGuideArgs, DeleteGuideResult> {
  name = "deleteGuide"

  async resolver(args: MutationDeleteGuideArgs, context: Context): Promise<DeleteGuideResult> {

    const id = args.input && args.input.id

    if (!id) {
      return {
        success: false,
      }
    }

    switch (await access(context, id)) {
      case "read":
      case "denied":
        return {
          success: false,
          message: "Cannot delete this guide",
        }
      case "notLoggedIn":
        return {
          success: false,
          message: NOT_LOGGED_IN,
        }
    }

    return deleteGuide(id)
  }

  typeDefs = gql`
      input DeleteGuideInput{
          id:String!
      }
      type DeleteGuideResult {
          success:Boolean!
          message:String
      }
      extend type Mutation {
          deleteGuide(input:DeleteGuideInput):DeleteGuideResult!
      }
  `
}
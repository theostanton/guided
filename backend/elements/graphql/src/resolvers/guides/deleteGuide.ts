import { Mutation, MutationResult } from "../Resolver"
import { Context } from "model/context"
import { gql } from "postgraphile"
import { database } from "@guided/database"
import access from "./access"


export default class DeleteGuideMutation extends Mutation<any, MutationResult> {
  name = "deleteGuide"

  async resolver(_: any, args: any, context: Context): Promise<MutationResult> {

    const id = args.input && args.input.id

    switch (await access(context, id!)) {
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

    try {
      await database.none("delete from guides where id=$1", [id])
      return {
        success: true,
      }
    } catch (e) {
      return {
        success: false,
        message: "Failed to delete",
      }
    }
  }

  typeDefs = gql`
      input DeleteGuideInput{
          id:ID!
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
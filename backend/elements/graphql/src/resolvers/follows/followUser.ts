import { Mutation, MutationResult } from "../Resolver"
import { Context } from "model/context"
import { gql } from "postgraphile"
import { logJson } from "@guided/logger"
import { database, Follow, insertOne } from "@guided/database"
import { MutationFollowUserArgs } from "generated"

export default class FollowUserMutation extends Mutation<MutationFollowUserArgs, MutationResult> {
  name = "followUser"

  async resolver(args: MutationFollowUserArgs, context: Context): Promise<MutationResult> {
    logJson(args, "followUser args")

    if (!context.jwtClaims) {
      return {
        success: false,
        message: "Not logged in",
      }
    }

    const follower = context.jwtClaims!.username!
    const followed = args.username

    const followsBefore = await database.manyOrNone<Follow>(
      "select * from follows where followed=$1 and follower=$2",
      [followed, follower])

    if (followsBefore.length > 0) {
      return {
        success: false,
        message: "Already following",
      }
    }

    const insertQuery = insertOne<Follow>("follows", {
      follower,
      followed,
      timestamp: new Date(),
    })

    await database.none(insertQuery)

    return {
      success: true,
      message: `Following ${followed}`,
    }
  }

  typeDefs = gql`
      extend type Mutation {
          followUser(username:String!):Result!
      }
  `
}
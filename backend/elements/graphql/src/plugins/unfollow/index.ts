import { log, logJson } from "@guided/logger"
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationFollowArgs, Result } from "../../generated"
import { database, Follow, insertOne } from "@guided/database"
import { Context } from "../types"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")

export async function unfollow(_: any, args: MutationFollowArgs, context: Context): Promise<Result> {
  logJson(args, "unfollow args")

  if (!context.jwtClaims) {
    return {
      success: false,
      message: "Not logged in",
    }
  }

  const follower = context.jwtClaims.username!
  const followed = args.username

  const followsBefore = await database.manyOrNone<Follow>(
    "select * from follows where followed=$1 and follower=$2",
    [followed, follower])

  if (followsBefore.length === 0) {
    return {
      success: false,
      message: "Not following",
    }
  }

  await database.none("delete from follows where follower=$1 and followed=$2", [follower, followed])

  return {
    success: true,
    message: `Unfollowed ${followed}`,
  }
}


const generator: ExtensionDefinition = {
  typeDefs: gql`
      extend type Mutation {
          unfollow(username:String!):Result!
      }
  `,
  resolvers: {
    Mutation: {
      unfollow,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
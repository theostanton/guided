import { log, logJson } from "@guided/logger"
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationFollowArgs, MutationMoveSpotArgs, Result } from "../../generated"
import { database, generateId, Spot, updateOne, Follow, insertOne } from "@guided/database"
import { Context } from "../types"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")

export async function follow(_: any, args: MutationFollowArgs, context: Context): Promise<Result> {
  logJson(args, "follow args")

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


const generator: ExtensionDefinition = {
  typeDefs: gql`
      extend type Mutation {
          follow(username:String!):Result!
      }
  `,
  resolvers: {
    Mutation: {
      follow,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
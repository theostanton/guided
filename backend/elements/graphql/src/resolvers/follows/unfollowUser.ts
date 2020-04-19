import { MutationResult, SimpleResolver } from "../Resolver"
import { Context } from "model/context"
import { gql } from "postgraphile"
import { logJson } from "@guided/logger"
import { database, Follow } from "@guided/database"
import { MutationUnfollowUserArgs } from "generated"


const RESOLVER: SimpleResolver<MutationUnfollowUserArgs, MutationResult> = {
  name: "unfollowUser",
  type: "Mutation",
  async resolver(_: any, args: MutationUnfollowUserArgs, context: Context): Promise<MutationResult> {
    logJson(args, "unfollowUser args")

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
  },

  typeDefs: gql`
      extend type Mutation {
          unfollowUser(username:String!):Result!
      }
  `,
}

export default RESOLVER
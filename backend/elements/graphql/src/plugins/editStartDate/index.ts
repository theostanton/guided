import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"
import { MutationEditStartDateArgs } from "../../generated"
import { Context } from "../types"
import { database, Guide, updateOne } from "@guided/database"
import { logJson } from "@guided/logger"
import { isValid } from "@guided/utils/srv/dates"
import ammendDates from "@guided/compute/srv/trigger/ammendDates"

const { makeExtendSchemaPlugin, gql } = require("graphile-utils")

async function editStartDate(_: any, args: MutationEditStartDateArgs, context: Context): Promise<{ success: boolean, message: string }> {

  const exists = await database.oneOrNone(`select 1
                                           from guides
                                           where id = $1`, [args.guideId])

  if (!exists) {
    return {
      success: false,
      message: `No guide for guideId=${args.guideId}`,
    }
  }

  if (args.date) {
    const isValidDate = isValid(args.date)
    logJson(isValidDate, "isValidDate")
    if (!isValidDate) {
      return {
        success: false,
        message: `${args.date} is not a valid dateString`,
      }
    }
  }

  const updateQuery = updateOne<Guide>("guides", {
    id: args.guideId,
    start_date: args.date || null,
  })

  logJson(updateQuery, "updateQuery")

  await database.none(updateQuery)


  const guideAfter = await database.one(`select *
                                         from guides
                                         where id = $1`, [args.guideId])

  //TODO this could maybe be fire and forget but is quite quick
  await ammendDates(guideAfter)

  if (args.date) {
    return {
      success: true,
      message: `Set start date to ${args.date}`,
    }
  } else {
    return {
      success: true,
      message: "Removed start date",
    }
  }

}

const generator: ExtensionDefinition = {
  typeDefs: gql`
      type Result {
          success:Boolean!
          message:String!
      }
      extend type Mutation {
          editStartDate(guideId:String!,date:String):Result!
      }
  `,
  resolvers: {
    Mutation: {
      editStartDate,
    },
  },
}

export default makeExtendSchemaPlugin(generator)
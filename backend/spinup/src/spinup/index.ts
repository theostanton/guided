import { database, insertMany } from "@guided/database"
import { logJson } from "@guided/logger"
import { actions, Contents } from "../index"


export default async function(contents: Contents) {
  await actions.truncate()

  const usersInsert = insertMany("users", contents.users)
  logJson(usersInsert,'usersInsert')
  await database.none(usersInsert)

  const guidesInsert = insertMany("guides", contents.guides)
  logJson(guidesInsert,'usersInsert')

  await database.none(guidesInsert)

  const spots = insertMany("spots", contents.spots)
  logJson(spots,'spots')
  await database.none(spots)
}
import { database, insertMany } from "@guided/database"
import { logJson } from "@guided/logger"
import { actions, Contents } from "../index"

export default async function(contents: Contents, preTruncate: boolean = false) {
  if (preTruncate) {
    throw new Error(`Nothing should be truncating here rn`)
    // await actions.truncate()
  }

  if (contents.users.length) {
    const usersInsert = insertMany("users", contents.users)
    await database.none(usersInsert)
  }

  if (contents.guides.length) {
    const guidesInsert = insertMany("guides", contents.guides)
    await database.none(guidesInsert)
  }

  if (contents.spots.length) {
    const spots = insertMany("spots", contents.spots)
    await database.none(spots)
  }
}
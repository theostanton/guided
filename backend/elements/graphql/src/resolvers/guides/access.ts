import { database } from "@guided/database"
import { Access, Context } from "../../model/context"
import { logJson } from "@guided/logger"

export default async function(context: Context, guideId: string): Promise<Access> {

  const { owner } = await database.one(`select owner
                                          from guides
                                          where id = $1`, [guideId])

  const username = context.jwtClaims && context.jwtClaims!.username

  if (!username) {
    return "notLoggedIn"
  }

  if (username === owner) {
    return "owner"
  }

  return "denied"
}
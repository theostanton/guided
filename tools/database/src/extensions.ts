import { IDatabase } from "pg-promise"
import { Spot } from "./types"
import { insertOne } from "./utils"
import { log } from "@guided/logger"

export default interface Extensions {
  insertSpot(spot: Spot): Promise<string>
}


export function extend(db: IDatabase<Extensions> & Extensions) {
  const instance: Extensions = {
    async insertSpot(spot: Spot): Promise<string> {
      const query = insertOne("guided.spots", spot)
      log(query, "query")
      await db.query(query)
      return spot.id
    },
  }
  db.insertSpot = instance.insertSpot
}
import { IDatabase } from "pg-promise"
import { Guide, Spot } from "./types"
import { insertOne } from "./utils"

export default interface Extensions {
  insertSpot(spot: Spot): Promise<string>

  selectGuide(guideId: string): Promise<Guide>
}


export function extend(db: IDatabase<Extensions> & Extensions) {
  const instance: Extensions = {
    async insertSpot(spot: Spot): Promise<string> {
      const query = insertOne("guided.spots", spot)
      await db.query(query)
      return spot.id
    },
    selectGuide(guideId: string): Promise<Guide> {
      return db.one(`SELECT *
                     from guides
                     where id = $1`, [guideId])
    },
  }
  Object.keys(instance).forEach(key => {
    // @ts-ignore
    db[key] = instance[key]
  })
}
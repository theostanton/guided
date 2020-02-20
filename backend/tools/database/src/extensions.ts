import { IDatabase } from "pg-promise"
import { Guide, Ride, Spot, Stage } from "./types"
import { insertOne } from "./utils"

export default interface Extensions {
  insertSpot(spot: Spot): Promise<string>

  selectGuide(guideId: string): Promise<Guide>

  selectSpotsForGuide(guideId: string): Promise<Spot[]>

  selectRidesForGuide(guideId: string): Promise<Ride[]>

  selectStagesForGuide(guideId: string): Promise<Stage[]>
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
    selectSpotsForGuide(guideId: string): Promise<Spot[]> {
      return db.manyOrNone<Spot>(`SELECT *
                                  from spots
                                  where guide = $1`, [guideId])
    },
    selectStagesForGuide(guideId: string): Promise<Stage[]> {
      return db.manyOrNone<Stage>(`SELECT *
                                   from stages
                                   where guide = $1`, [guideId])
    },
    selectRidesForGuide(guideId: string): Promise<Ride[]> {
      return db.manyOrNone<Ride>(`SELECT *
                                  from rides
                                  where guide = $1`, [guideId])
    },
  }
  Object.keys(instance).forEach(key => {
    // @ts-ignore
    db[key] = instance[key]
  })
}
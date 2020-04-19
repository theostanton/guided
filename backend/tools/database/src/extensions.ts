import { IDatabase } from "pg-promise"
import { Guide, Ride, Spot, Stage } from "./types"
import { insertMany, insertOne, updateMany } from "./utils"
import { log } from "@guided/logger"

type ItemId = { id: string }

export default interface Extensions {
  insertSpot(spot: Spot): Promise<string>

  selectGuide(guideId: string): Promise<Guide>

  selectSpotsForGuide(guideId: string): Promise<Spot[]>

  selectRidesForGuide(guideId: string): Promise<Ride[]>

  selectStagesForGuide(guideId: string): Promise<Stage[]>

  getGuideIdForSpot(spotId: string): Promise<string>

  insertOne<T>(tableName: string, items: T): Promise<ItemId>

  insertMany<T>(tableName: string, items: T[]): Promise<ItemId[]>

  updateOne<T>(tableName: string, item: Partial<T>, onColumn: string, oldOnColumnValue: string | undefined): Promise<ItemId>

  updateMany<T>(tableName: string, items: Partial<T>[], onColumn: string, oldOnColumnValue: string | undefined): Promise<ItemId[]>
}


export function extend(db: IDatabase<Extensions> & Extensions) {
  const instance: Extensions = {
    async insertSpot(spot: Spot): Promise<string> {
      const query = insertOne("spots", spot)
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
                                  where guide = $1
                                  order by position`, [guideId])
    },
    selectStagesForGuide(guideId: string): Promise<Stage[]> {
      return db.manyOrNone<Stage>(`SELECT *
                                   from stages
                                   where guide = $1
                                   order by position`, [guideId])
    },
    selectRidesForGuide(guideId: string): Promise<Ride[]> {
      return db.manyOrNone<Ride>(`SELECT *
                                  from rides as r
                                  where r.guide = $1
                                  order by r.position`, [guideId])
    },
    async getGuideIdForSpot(spotId: string): Promise<string> {
      const { guide } = await db.one<{ guide: string }>(`SELECT guide
                                                         from spots
                                                         where id = $1`, [spotId])
      return guide
    },

    async insertOne<T>(tableName: string, item: T): Promise<ItemId> {
      const results = await this.insertMany(tableName, [item])
      return results[0]
    },

    async insertMany<T>(tableName: string, items: T[]): Promise<ItemId[]> {
      if (items.length === 0) {
        return []
      }
      const query = insertMany(tableName, items, "id")
      return db.many<{ id: string }>(query)
    },

    async updateOne<T>(tableName: string, item: Partial<T>, onColumn: string = "id", oldOnColumnValue: string | undefined = undefined): Promise<ItemId> {
      const results = await this.updateMany(tableName, [item], onColumn, oldOnColumnValue)
      return results[0]
    },

    async updateMany<T>(tableName: string, items: Partial<T>[], onColumn: string, oldOnColumnValue: string | undefined): Promise<ItemId[]> {
      if (items.length === 0) {
        return []
      }
      const query = updateMany(tableName, items, Object.keys(items[0]), onColumn, oldOnColumnValue)
      return db.many<ItemId>(query)
    },
  }
  Object.keys(instance).forEach(key => {
    // @ts-ignore
    db[key] = instance[key]
  })
}
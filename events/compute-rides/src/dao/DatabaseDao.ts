import { Dao } from "."
import { database, Guide, Spot } from "@guided/database"
import { Stage } from "../action"
import { log } from "@guided/logger"
import { insertMany } from "@guided/database"

const DELETE_UNLOCKED = `
    DELETE
    from guided.rides
    where guide = $1;
    DELETE
    from guided.spots
    where guide = $1
      and locked = false
`

const SELECT_SPOTS = `
    SELECT *
    from guided.spots
    where guide = $1
    order by position
`

const SELECT_GUIDE = `
    SELECT *
    from guided.guides
    where id = $1
`

export class DatabaseDao implements Dao {

  guideId: string

  constructor(guideId: string) {
    this.guideId = guideId
  }

  async deleteUnlocked(): Promise<void> {
    await database.none(DELETE_UNLOCKED, [this.guideId])
  }

  async spots(): Promise<Spot[]> {
    return database.many<Spot>(SELECT_SPOTS, [this.guideId])
  }

  async insertStages(stages: Stage[]): Promise<void> {
    log("insertStages")
    await database.tx(transaction => {
      const queries: any[] = []
      stages
        .filter(stage => {
          return stage.newSpots.length > 0
        })
        .forEach(stage => {
          const query = insertMany("guided.spots", stage.newSpots)
          log(query, "quer!y")
          queries.push(transaction.none(query))
        })

      return transaction.batch(queries)
    })

    await database.tx(transaction => {
      const queries: any[] = []
      stages
        .filter(stage => {
          return stage.newRides.length > 0
        })
        .forEach(stage => {
          const query = insertMany("guided.rides", stage.newRides)
          log(query, "query!")
          queries.push(transaction.none(query))
        })
      return transaction.batch(queries)
    })
  }

  guide(): Promise<Guide> {
    return database.one<Guide>(SELECT_GUIDE, [this.guideId])
  }

}
import { Dao, StageData } from "."
import { database, Guide, insertOne, Spot } from "@guided/database"
import { insertMany } from "@guided/database"
import { executeConcurrently } from "@guided/utils"
import { Stage } from "@guided/database/srv/types"

const DELETE_UNLOCKED = `
    DELETE
    from rides
    where guide = $1;
    DELETE
    from spots
    where guide = $1
      and locked = false
`

const SELECT_SPOTS = `
    SELECT *
    from spots
    where stage = $1
    order by position
`

const SELECT_GUIDE = `
    SELECT *
    from guides
    where id = $1
`

const UPDATE_SPOT_DATE = `
    UPDATE guided.spots
    set date   = $1,
        updated=$3
    where id = $2
`

export class DatabaseDao implements Dao {

  stageId: string

  constructor(stageId: string) {
    this.stageId = stageId
  }

  async spots(): Promise<Spot[]> {
    return database.manyOrNone<Spot>(SELECT_SPOTS, [this.stageId])
  }

  async insertData(data: StageData): Promise<void> {
    //TODO
    // await executeConcurrently(stages, async (stage: StageData) => {
    //
    //   const insertStage = insertOne("guided.stages", {
    //     id: stage.stageId,
    //     from_spot: stage.startSpot.id,
    //     to_spot: stage.endSpot.id,
    //     guide: this.guideId,
    //     created: new Date(),
    //     updated: null,
    //   } as Stage)
    //
    //   await database.none(insertStage)
    //
    //   await database.tx(transaction => {
    //     const queries: any[] = []
    //     if (stage.newSpots.length) {
    //       const insertNewSpotsQuery = insertMany("guided.spots", stage.newSpots)
    //       queries.push(transaction.none(insertNewSpotsQuery))
    //     }
    //     queries.push(transaction.none(UPDATE_SPOT_DATE, [stage.startSpot.date, stage.startSpot.id, new Date()]))
    //     return transaction.batch(queries)
    //   })
    //
    //   await database.tx(transaction => {
    //     const queries: any[] = []
    //     if (stage.newRides.length > 0) {
    //       const query = insertMany("guided.rides", stage.newRides)
    //       queries.push(transaction.none(query))
    //     }
    //     return transaction.batch(queries)
    //   })
    // })
  }

}
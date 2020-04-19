import { Dao, StageData } from "."
import { Computation, database, insertMany } from "@guided/database"
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

export class DatabaseDao implements Dao {

  computationId: string
  computation: Computation

  constructor(computation: Computation) {
    this.computationId = computation.id
    this.computation = computation
  }

  static async create(computationId: string): Promise<DatabaseDao> {
    const computation = await database.one("select * from computations where id=$1", [computationId])
    return new DatabaseDao(computation)
  }

  async stage(): Promise<Stage> {
    return database.one<Stage>("select * from stages where id=$1", [this.computation.stage])
  }

  async insertData(data: StageData): Promise<void> {

    await database.none(`update stages
                         set status='ready',
                             updated=$1
                         where id = $2`, [new Date(), data.stageId])

    await database.tx(transaction => {
      const queries: any[] = []

      if (data.newSpots.length) {
        const insertNewSpotsQuery = insertMany("spots", data.newSpots)
        queries.push(transaction.none(insertNewSpotsQuery))
      }

      // Update dates of stages start spot
      queries.push(transaction.none(`
          UPDATE spots
          set date   = $1,
              updated=$2
          where id = $3`, [data.startSpot.date, new Date(), data.startSpot.id]))
      return transaction.batch(queries)
    })

    const query = insertMany("rides", data.newRides)
    await database.none(query)
  }
}
import { Dao } from "."
import { database, Guide, Spot } from "@guided/database"

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

  guide(): Promise<Guide> {
    return database.one<Guide>(SELECT_GUIDE, [this.guideId])
  }

}
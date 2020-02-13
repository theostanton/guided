import { Guide, Ride, Spot } from "@guided/database"
import { DatabaseDao } from "./DatabaseDao"

export type Stage = {
  durationDays: number
  newRides: Ride[]
  startSpot: Spot
  endSpot: Spot
  newSpots: Spot[]
}

export interface Dao {

  guideId: string

  deleteUnlocked(): Promise<void>

  spots(): Promise<Spot[]>

  guide(): Promise<Guide>

  insertStages(stage: Stage[]): Promise<void>
}

export default DatabaseDao
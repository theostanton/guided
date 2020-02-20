import { Guide, Ride, Spot } from "@guided/database"
import { DatabaseDao } from "./DatabaseDao"

export type StageData = {
  stageId: string
  durationDays: number
  newRides: Ride[]
  startSpot: Spot
  endSpot: Spot
  newSpots: Spot[]
}

export interface Dao {

  stageId: string

  spots(): Promise<Spot[]>

  insertData(data: StageData): Promise<void>
}

export default DatabaseDao
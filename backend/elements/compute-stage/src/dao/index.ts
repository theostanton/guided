import { ComputationStatus, Guide, Ride, Spot, Stage } from "@guided/database"
import { DatabaseDao } from "./DatabaseDao"

export type StageData = {
  status: ComputationStatus
  stageId: string
  durationDays: number
  newRides: Ride[]
  startSpot: Spot
  endSpot: Spot
  newSpots: Spot[]
}

export interface Dao {

  computationId: string

  stage(): Promise<Stage>

  insertData(data: StageData): Promise<void>
}

export default DatabaseDao
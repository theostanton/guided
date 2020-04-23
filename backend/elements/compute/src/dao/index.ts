import { ComputationStatus, Ride, Spot, Stage } from "@guided/database"
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

import { Guide, Spot } from "@guided/database"
import { DatabaseDao } from "./DatabaseDao"
import { Stage } from "../action"

export interface Dao {

  guideId: string

  deleteUnlocked(): Promise<void>

  spots(): Promise<Spot[]>

  guide(): Promise<Guide>

  insertStages(stage: Stage[]): Promise<void>
}

export default DatabaseDao
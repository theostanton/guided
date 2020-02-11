import { Guide, Spot } from "@guided/database"
import { DatabaseDao } from "./DatabaseDao"

export interface Dao {

  guideId: string

  deleteUnlocked(): Promise<void>

  spots(): Promise<Spot[]>

  guide(): Promise<Guide>
}

export default DatabaseDao
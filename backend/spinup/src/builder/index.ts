import { Guide, Spot, User } from "@guided/database"
import Builder from "./Builder"

export type Contents = {
  users: User[]
  guides: Guide[]
  // stages: Stage[]
  // rides: Rides[]
  spots: Spot[]
}

export { Builder }

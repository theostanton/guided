import { database, Spot, updateMany } from "@guided/database"
import { log, logJson } from "@guided/logger"

export default async function(spots: Spot[]): Promise<Spot[]> {

  spots.forEach(spot => {
    if (spot.locked === false) {
      throw new Error(`Shouldn't have any unlocked spots!`)
    }
  })

  let spotsNeedPositioning = spots.some((spot: Spot, index: number) => {
    return spot.position !== index.toString()
  })

  if (!spotsNeedPositioning) {
    return spots
  }

  const spotsToInsert: Spot[] = spots.map((spot: Spot, index: number) => {
    return {
      ...spot,
      position: index.toString(),
    }
  })

  const updateQuery = updateMany("spots", spotsToInsert, ["position"], "id")
  log(updateQuery, "updateQuery")

  await database.none(updateQuery)

  return spotsToInsert
}
import { database, Spot, updateMany } from "@guided/database"

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

  await database.manyOrNone(updateQuery)

  return spotsToInsert
}
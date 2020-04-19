import { UpdateSpotPatch, UpdateSpotResult } from "generated"
import { database, Spot, updateOne } from "@guided/database"
import * as computeStage from "@guided/compute"
import { ammendDates } from "@guided/compute"

export default async function(patch: UpdateSpotPatch): Promise<UpdateSpotResult> {

  const { label, location, nights } = patch

  const updatedSpot = await database.oneOrNone<Spot>("select * from spots where id=$1", ["id"])

  if (!updatedSpot) {
    return {
      success: false,
      message: "No spot for that ID",
    }
  }

  let updateDates: boolean = false
  let triggerComputations: boolean = false

  if (label !== label) {
    updatedSpot.label = label!
  }

  if (location !== undefined) {
    updatedSpot.country = location!.country!
    updatedSpot.lat = location!.lat!
    updatedSpot.long = location!.long!
    updatedSpot.location = location!.location!
    triggerComputations = true
  }

  if (nights !== undefined) {
    updatedSpot.nights = nights!
    updateDates = true
  }

  const updateQuery = updateOne<Spot>("spots", updatedSpot)

  try {
    const result = await database.oneOrNone<{ id: string }>(updateQuery)

    if (result && result.id) {

      if (triggerComputations) {
        //TODO ensure moved lat/long is handled
        const packet = await computeStage.prepare(updatedSpot.guide)
        await computeStage.trigger(packet)
      }
      if (updateDates) {
        const guide = await database.selectGuide(updatedSpot.guide)
        await ammendDates(guide)
      }

      return {
        success: true,
        id: result.id!,
        ammendedDates: updateDates,
        triggeredComputations: triggerComputations,
      }
    } else {
      return {
        success: false,
        message: "Failed to update",
      }
    }
  } catch (e) {
    return {
      success: true,
      message: e.message,
    }
  }
}
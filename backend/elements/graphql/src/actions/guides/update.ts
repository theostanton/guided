import { UpdateGuidePatch, UpdateGuideResult } from "../../generated"
import slugify from "slugify"
import { database, Guide, updateOne } from "@guided/database"
import { logJson } from "@guided/logger"

export default async function(patch: UpdateGuidePatch): Promise<UpdateGuideResult> {

  const { id: previousId, title, isCircular, type, maxHoursPerRide } = patch

  logJson(patch, "patch")

  const updatedGuide = await database.selectGuide(previousId)

  if (title !== undefined) {
    const slug = slugify(title!, {
      lower: true,
      remove: /[*+~.()'"!:@_]/g,
    })

    updatedGuide.title = title!
    updatedGuide.slug = slug
    updatedGuide.id = `${updatedGuide.owner}_${slug}`
  }


  if (isCircular !== undefined) {
    updatedGuide.is_circular = isCircular!
  }

  if (type !== undefined) {
    updatedGuide.transport_type = type!
  }

  if (maxHoursPerRide !== undefined) {
    updatedGuide.max_hours_per_ride = maxHoursPerRide!
  }

  updatedGuide.updated = new Date()

  logJson(updatedGuide, "updatedGuide")

  const updateQuery = updateOne<Guide>("guides", updatedGuide, "id", previousId!)

  try {
    const result = await database.oneOrNone<{ id: string }>(updateQuery)

    if (result && result.id) {
      return {
        success: true,
        id: result.id!,
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

  return {
    success: true,
  }
}
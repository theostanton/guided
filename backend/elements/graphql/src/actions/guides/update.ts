import { UpdateGuidePatch, UpdateGuideResult } from '../../generated'
import slugify from 'slugify'
import { database, Guide, updateOne } from '@guided/database'
import * as computeStage from '@guided/compute'
import { ammendDates } from '@guided/compute'

export default async function (
    patch: UpdateGuidePatch
): Promise<UpdateGuideResult> {
    const {
        id: previousId,
        title,
        isCircular,
        type,
        maxHoursPerRide,
        startDate,
    } = patch

    const updatedGuide = await database.selectGuide(previousId)

    let triggerComputations,
        triggerDates = false

    if (title !== undefined) {
        const slug = slugify(title!, {
            lower: true,
            remove: /[*+~.()'"!:@_]/g,
        })

        updatedGuide.title = title!
        updatedGuide.slug = slug
        //todo add dredirect for previous guide slug
        updatedGuide.id = `${updatedGuide.owner}_${slug}`
    }

    if (isCircular !== undefined) {
        updatedGuide.is_circular = isCircular!
        triggerComputations = true
    }

    if (type !== undefined) {
        updatedGuide.transport_type = type!
        triggerComputations = true
    }

    if (maxHoursPerRide !== undefined) {
        updatedGuide.max_hours_per_ride = maxHoursPerRide!
        triggerComputations = true
    }

    if (startDate !== undefined) {
        updatedGuide.start_date = startDate!.length > 0 ? startDate! : null
        triggerDates = true
    }

    updatedGuide.updated = new Date()

    const updateQuery = updateOne<Guide>(
        'guides',
        updatedGuide,
        'id',
        previousId
    )

    try {
        const result = await database.oneOrNone<{ id: string }>(updateQuery)

        if (result && result.id) {
            if (triggerComputations) {
                const packet = await computeStage.prepare(result.id)
                await computeStage.trigger(packet)
            } else if (triggerDates) {
                await ammendDates(updatedGuide)
            }

            return {
                success: true,
                id: result.id,
                triggeredComputations: triggerComputations,
                triggeredDates: triggerDates,
            }
        } else {
            return {
                success: false,
                message: 'Failed to update',
            }
        }
    } catch (e) {
        return {
            success: false,
            message: e.message,
        }
    }
}

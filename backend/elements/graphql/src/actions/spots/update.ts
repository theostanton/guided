import { UpdateSpotPatch, UpdateSpotResult } from 'generated'
import { database, Spot, updateOne } from '@guided/database'
import * as computeStage from '@guided/compute'
import { ammendDates } from '@guided/compute'

export const MESSAGE_NO_SPOT = '"No spot for that ID"'

export default async function (
    patch: UpdateSpotPatch
): Promise<UpdateSpotResult> {
    const { label, location, nights } = patch

    const updatedSpot = await database.oneOrNone<Spot>(
        'select * from spots where id=$1',
        [patch.id]
    )

    if (!updatedSpot) {
        return {
            success: false,
            message: MESSAGE_NO_SPOT,
        }
    }

    let updateDates = false
    let triggerComputations = false

    if (updatedSpot.label !== undefined) {
        updatedSpot.label = label || null
    }

    if (location) {
        updatedSpot.country = location.country!
        updatedSpot.lat = location.lat
        updatedSpot.long = location.long
        updatedSpot.location = location.location
        triggerComputations = true
        // Stagnate stages tied to this spot
        await database.none(
            `update stages
                         set status='stale'
                         where from_spot = $1
                            or to_spot = $1`,
            [patch.id]
        )
    }

    if (nights !== undefined) {
        updatedSpot.nights = nights
        updateDates = true
    }

    const updateQuery = updateOne<Spot>('spots', updatedSpot)

    try {
        const result = await database.oneOrNone<{ id: string }>(updateQuery)

        if (result && result.id) {
            if (triggerComputations) {
                //TODO ensure moved lat/long is handled
                const packet = await computeStage.prepare(updatedSpot.guide)
                await computeStage.trigger(packet)
            } else if (updateDates) {
                const guide = await database.selectGuide(updatedSpot.guide)
                await ammendDates(guide)
            }

            return {
                success: true,
                id: result.id,
                ammendedDates: updateDates,
                triggeredComputations: triggerComputations,
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

import { UpdateSpotPatch } from '../../generated'
import { database, Spot } from '@guided/database'
import { MutationResult } from '../../resolvers/Resolver'
import { ItemID } from 'aws-sdk/clients/personalizeruntime'
import { prepare, trigger } from '@guided/compute'

export default async function (spotId: string): Promise<MutationResult> {
    const spot = await database.oneOrNone<Spot>(
        `select * from spots where id=$1`,
        [spotId]
    )

    if (!spot) {
        return {
            success: false,
            message: `No spot for id=${spotId}`,
        }
    }

    const updateStagesQuery = `
    update stages
    set status='stale'
where from_spot=$1 or to_spot=$1
returning id
    `

    const updateStagesResults = await database.manyOrNone<ItemID>(
        updateStagesQuery,
        [spotId]
    )

    const packet = await prepare(spot.guide)
    await trigger(packet)

    return {
        success: true,
    }
}

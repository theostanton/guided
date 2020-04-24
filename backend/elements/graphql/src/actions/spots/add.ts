import { AddSpotInput, UpdateSpotResult } from '../../generated'
import * as computeStage from '@guided/compute'
import { Packet } from '@guided/compute'
import { database, generateId, Spot } from '@guided/database'
import { logJson } from '@guided/logger'
import { getInfo } from '@guided/google'

async function prepare(
    input: AddSpotInput,
    owner: string
): Promise<{
    spotId: string;
    packet: Packet;
}> {
    const { lockedSpotsCount } = await database.one(
        `SELECT count(1) as "lockedSpotsCount"
                                                   from spots
                                                   where guide = $1
                                                     and locked = true`,
        [input.guideId]
    )
    logJson(lockedSpotsCount, 'lockedSpotsCount')

    let { country, location } = input

    if (!country || !location) {
        const info = await getInfo(input.lat, input.long)
        country = info.countryCode
        location = info.label
    }

    const spotId = generateId('spot')

    const spot: Spot = {
        id: spotId,
        guide: input.guideId,
        label: input.label || null,
        owner,
        lat: input.lat,
        date: null,
        long: input.long,
        nights: input.nights,
        position: `${parseInt(lockedSpotsCount)}.0`,
        location,
        country,
        locked: true,
        stage: null,
        created: new Date(),
        updated: null,
    }

    await database.insertSpot(spot)

    const packet = await computeStage.prepare(input.guideId)

    return {
        spotId,
        packet,
    }
}

export default async function (
    input: AddSpotInput,
    owner: string
): Promise<UpdateSpotResult> {
    const { spotId, packet } = await prepare(input, owner)

    await computeStage.trigger(packet)

    return {
        success: true,
        id: spotId,
    }
}

import { Computation, database, generateId, Stage } from '@guided/database'

export type Packet = {
    guideId: string;
    computationIds: string[];
    alteredStages: Pick<Stage, 'id' | 'status'>[];
}

export default async function (guideId: string): Promise<Packet> {
    const packet: Packet = {
        guideId,
        computationIds: [],
        alteredStages: [],
    }

    const spots = await database.selectSpotsForGuide(guideId)
    const rides = await database.selectRidesForGuide(guideId)
    const stages = await database.selectStagesForGuide(guideId)

    const lockedSpots = spots.filter((spot) => {
        return spot.locked
    })

    const stagesToCreate: Stage[] = []
    const computations: Computation[] = []

    // Stages that should exist or have just been created
    const relevantStageIds: string[] = []

    if (lockedSpots.length > 1) {
        const { isCircular } = await database.one<{ isCircular: boolean }>(
            `select is_circular as "isCircular"
                                                                        from guides
                                                                        where id = $1`,
            [guideId]
        )

        const totalLockedSpots = isCircular
            ? lockedSpots.length
            : lockedSpots.length - 1
        for (let i = 0; i < totalLockedSpots; i++) {
            const thisSpotId = lockedSpots[i].id
            const nextSpotId = lockedSpots[(i + 1) % lockedSpots.length].id
            const stage = stages.find((stage) => {
                return (
                    stage.from_spot === thisSpotId &&
                    stage.to_spot === nextSpotId &&
                    stage.status !== 'stale'
                )
            })
            if (stage) {
                // No change neccessary
                // Add to relevantStageIds to avoid it being deleted
                relevantStageIds.push(stage.id)
            } else {
                // Create computation to create this stage
                const stageId = generateId('stage')
                stagesToCreate.push({
                    id: stageId,
                    status: 'computing',
                    updated: null,
                    guide: guideId,
                    position: parseInt(lockedSpots[i].position!),
                    created: new Date(),
                    from_spot: thisSpotId,
                    to_spot: nextSpotId,
                })
                const computationId = generateId('computation')
                computations.push({
                    id: computationId,
                    created: new Date(),
                    guide: guideId,
                    status: 'scheduled',
                    stage: stageId,
                    duration: null,
                    started: null,
                    ended: null,
                })
            }
        }
    }

    const insertStagesResult = await database.insertMany(
        'stages',
        stagesToCreate
    )

    if (
        !insertStagesResult ||
        insertStagesResult.length != stagesToCreate.length
    ) {
        throw new Error(`Failed to create ${stagesToCreate.length} stages`)
    }

    // If it already exists but has no corresponding from and to stages, delete it
    const stageIdsToUpdate = stages
        .filter((stage) => {
            return !relevantStageIds.includes(stage.id)
        })
        .map((stage) => {
            return stage.id
        })

    packet.alteredStages = stageIdsToUpdate.map((stageId) => {
        return {
            id: stageId,
            status: 'stale',
        }
    })

    await Promise.all(
        packet.alteredStages.map((stage) => {
            return database.updateOne('stages', stage)
        })
    )

    packet.computationIds = computations.map((computation) => {
        return computation.id
    })
    const createComputationsResult = await database.insertMany(
        'computations',
        computations
    )

    if (
        !createComputationsResult ||
        createComputationsResult.length !== computations.length
    ) {
        throw new Error(`Failed to create ${computations.length} computations`)
    }

    return packet
}

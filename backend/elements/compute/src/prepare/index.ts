/*
For a given guideId
1. Calculates which spots / stages / rides are still relevant
2. Stagnates irrelevant stages - 'stale'
3. Stagnates rides of stale stages - 'stale'
4. Stagnates unlocked spots of stale stages  - 'stale'
3. Creates stages for new stages to compute - 'computing'
4. Creates computation rows for each of the stages created - 'scheduled'
 */

import {
  Computation,
  database,
  generateId,
  insertMany,
  RideStatus,
  SpotStatus,
  Stage,
  StageStatus,
} from "@guided/database"

export type Packet = {
  guideId: string
  computationIds: string[],
  alterations: {
    alteredStages: { id: string, status: StageStatus }[],
    alteredRides: { id: string, status: RideStatus }[],
    alteredSpots: { id: string, status: SpotStatus }[]
  }
}

export default async function(guideId: string): Promise<Packet> {

  const packet: Packet = {
    guideId,
    computationIds: [],
    alterations: {
      alteredSpots: [],
      alteredStages: [],
      alteredRides: [],
    },
  }

  const spots = await database.selectSpotsForGuide(guideId)
  const rides = await database.selectRidesForGuide(guideId)
  const stages = await database.selectStagesForGuide(guideId)

  const lockedSpots = spots
    .filter(spot => {
      return spot.locked
    })

  const stagesToCreate: Stage[] = []
  const computations: Computation[] = []
  const relevantStageIds: string[] = []


  if (lockedSpots.length > 1) {

    for (let i = 0; i < lockedSpots.length; i++) {

      const thisSpotId = lockedSpots[i].id
      const nextSpotId = lockedSpots[(i + 1) % lockedSpots.length].id
      const stage = stages.find(stage => {
        return stage.from_spot === thisSpotId && stage.to_spot === nextSpotId
      })
      if (stage) {
        relevantStageIds.push(stage.id)
      } else {
        const stageId = generateId("stage")
        stagesToCreate.push({
          id: stageId,
          status: "computing",
          updated: null,
          guide: guideId,
          position: parseInt(lockedSpots[i].position!),
          created: new Date(),
          from_spot: thisSpotId,
          to_spot: nextSpotId,
        })
        const computationId = generateId("computation")
        computations.push({
          id: computationId,
          created: new Date(),
          guide: guideId,
          status: "scheduled",
          stage: stageId,
          duration: null,
          started: null,
          ended: null,
        })
      }
    }
  }

  const stageIdsToDelete = stages.filter(stage => {
    return !relevantStageIds.includes(stage.id)
  }).map(stage => {
    return stage.id
  })

  const rideIdsToDelete = rides.filter(ride => {
    return stageIdsToDelete.includes(ride.stage)
  }).map(ride => {
    return ride.id
  })

  const spotIdsToDelete = spots.filter(spot => {
    if (spot.locked && spot.stage) {
      throw new Error(`Spot shouldnt have stage if locked. spot.id=${spot.id}`)
    }
    return spot.stage && stageIdsToDelete.includes(spot.stage)
  }).map(spot => {
    return spot.id
  })

  packet.alterations.alteredRides = rideIdsToDelete.map(rideId => {
    return {
      id: rideId,
      status: "stale",
    }
  })

  packet.alterations.alteredSpots = spotIdsToDelete.map(spotId => {
    return {
      id: spotId,
      status: "stale",
    }
  })

  packet.alterations.alteredStages = stageIdsToDelete.map(stageId => {
    return {
      id: stageId,
      status: "stale",
    }
  })


  await database.none(`delete
                       from stages
                       where id in ('${stageIdsToDelete.join("\',\'")}')`)

  if (stagesToCreate.length > 0) {
    const insertStagesQuery = insertMany("stages", stagesToCreate)
    await database.none(insertStagesQuery)
  }

  if (computations.length > 0) {
    packet.computationIds = computations.map(computation => {
      return computation.id
    })
    const insertComputationsQuery = insertMany("computations", computations)
    await database.none(insertComputationsQuery)
  }

  return packet
}
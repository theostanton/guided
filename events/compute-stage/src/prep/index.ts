/*
For a given guideId
1. Calculates which spots / stages / rides are still relevant
2. Stagnates irrelevant stages - 'stale'
3. Stagnates rides of stale stages - 'stale'
4. Stagnates unlocked spots of stale stages  - 'stale'
3. Creates stages for new stages to compute - 'computing'
 */


import { database, RideStatus, SpotStatus, StageStatus } from "@guided/database"
import { logJson } from "@guided/logger"

export type PrepResult = {
  guideId: string
  stageIds: string[],
  alterations: {
    alteredStages: { id: string, status: StageStatus }[],
    alteredRides: { id: string, status: RideStatus }[],
    alteredSpots: { id: string, status: SpotStatus }[]
  }
}

export default async function(guideId: string): Promise<PrepResult> {

  const guide = await database.selectGuide(guideId)

  logJson(guide, "guide")

  return {
    guideId,
    stageIds: [],
    alterations: {
      alteredSpots: [],
      alteredStages: [],
      alteredRides: [],
    },
  }
}
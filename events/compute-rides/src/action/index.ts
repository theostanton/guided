import { logJson } from "@guided/logger"
import Dao from "../dao"
import { ComputeRidesMessageBody, ComputeRidesResult } from "../types"
import getStageContexts from "./getStageContexts"
import calculateStages from "./calculateStages"

export default async function(body: ComputeRidesMessageBody): Promise<ComputeRidesResult> {
  logJson(body, "handle compute-rides")

  const { guideId } = body

  const dao = new Dao(guideId)

  const guide = await dao.guide()

  const spots = await dao.spots()

  const contexts = await getStageContexts(spots, guide)

  const stages = await calculateStages(guide.start_date, contexts)

  await dao.insertStages(stages)

  return {
    success: true,
  }
}
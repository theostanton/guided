import { logJson } from "@guided/logger"
import Dao from "../dao"
import { ComputeStageMessageBody, ComputeStageResult } from "../types"
import getStageContexts from "./getStageContexts"
import calculateStages from "./calculateStages"
import positionSpots from "./positionSpots"

export default async function(body: ComputeStageMessageBody): Promise<ComputeStageResult> {
  logJson(body, "handle compute-stage")

  const { stageId } = body

  const dao = new Dao(stageId)

  // const guide = await dao.guide()

  // const dirtySpots = await dao.spots()
  //
  // const spots = await positionSpots(dirtySpots)
  //
  // const contexts = await getStageContexts(spots, guide)
  //
  // const stages = await calculateStages(guide.start_date, contexts)
  //
  // await dao.insertStages(stages)

  return {
    success: true,
  }
}
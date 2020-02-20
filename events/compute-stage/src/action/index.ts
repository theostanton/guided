import { logJson } from "@guided/logger"
import Dao from "../dao"
import { ComputeStageMessageBody, ComputeStageResult } from "../types"
import { database, Guide, Spot } from "@guided/database"
import calculateStage from "./calculateStage"
import getRoute from "./getRoute"
import guide from "@guided/website/src/pages/guide"


export default async function execute(body: ComputeStageMessageBody): Promise<ComputeStageResult> {
  logJson(body, "handle compute-stage")

  const { computationId } = body

  await database.none(`update computations
                       set status='computing'
                       where id = $1`, [computationId])

  const dao = await Dao.create(computationId)

  const stage = await dao.stage()

  const fromSpot = await database.one<Spot>("select * from spots where id=$1", [stage.from_spot])
  const toSpot = await database.one<Spot>("select * from spots where id=$1", [stage.to_spot])

  const route = await getRoute(fromSpot, toSpot)

  //TODO get startDate, if previous stages have been calculated
  const startDate: Date | null = null

  const guide = await database.one<Guide>("select * from guides where id=$1", [stage.guide])
  const stageData = await calculateStage(startDate, stage.id, guide, fromSpot, toSpot, route)

  await dao.insertData(stageData)

  await database.none(`update computations
                       set status=$1
                       where id = $2`, [stageData.status, computationId])

  await database.none(`update stages
                       set status='ready'
                       where id = $1`, [stage.id])
  return {
    success: true,
  }
}
import { logJson } from "@guided/logger"
import Dao from "../dao"
import { ComputeStageMessageBody, ComputeStageResult } from "../types"
import { database, Guide, Spot } from "@guided/database"
import calculateStage from "./calculateStage"
import getRoute from "./getRoute"
import ammendDates from "../trigger/ammendDates"

async function runFinalisationIfRequired(guide: Guide): Promise<boolean> {
  if (guide.start_date) {
    const activeComputations = await database.manyOrNone("select id from computations where guide=$1 and status in ('computing','scheduled')", [guide.id])
    if (activeComputations.length === 0) {
      await ammendDates(guide)
      return true
    }
  }
  return false
}

export default async function execute(body: ComputeStageMessageBody): Promise<ComputeStageResult> {
  const start = new Date()
  logJson(body, "handle compute-stage")

  const { computationId } = body

  await database.none(`update computations
                       set status='computing',
                           started=$2
                       where id = $1`, [computationId, start])

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

  const end = new Date()
  const durationMs = end.getTime() - start.getTime()
  await database.none(`update computations
                       set status=$1,
                           ended=$2,
                           duration=$3
                       where id = $4`, [stageData.status, end, durationMs, computationId])


  let ranFinalisation = await runFinalisationIfRequired(guide)


  await database.none(`update stages
                       set status='ready'
                       where id = $1`, [stage.id])
  return {
    success: true,
    ranFinalisation,
  }
}
import { logJson } from "@guided/logger"
import { Computation, database, Guide, Patch, Spot } from "@guided/database"
import calculateStage from "./calculateStage"
import getRoute from "./getRoute"
import ammendDates from "../trigger/ammendDates"
import { ComputeStageMessageBody, ComputeStageResult } from "../types"
import { Stage } from "@guided/database/srv/types"
import { StageData } from "../dao"

async function runFinalisationIfRequired(guide: Guide): Promise<boolean> {
  const activeComputations = await database.manyOrNone("select id from computations where guide=$1 and status in ('computing','scheduled')", [guide.id])
  if (activeComputations.length === 0) {
    await ammendDates(guide)
    return true
  }
  return false
}

async function insert(data: StageData) {

  const stage: Patch<Stage> = {
    id: data.stageId,
    status: "ready",
  }

  await database.updateOne("stages", stage)

  await database.insertMany("spots", data.newSpots)
  await database.updateMany("spots", data.newSpots)
  await database.insertMany("rides", data.newRides)
}

export default async function(body: ComputeStageMessageBody): Promise<ComputeStageResult> {
  const start = new Date()
  logJson(body, "handle compute-stage")
  const { computationId } = body

  try {

    await database.updateOne<Computation>("computations", { id: computationId, status: "computing" })

    const stageQuery = `
        select s.*
        from stages as s
                 inner join computations as c on c.stage = s.id
        where c.id = $1
    `
    const stage = await database.one<Stage>(stageQuery, [computationId])

    const fromSpot = await database.one<Spot>("select * from spots where id=$1", [stage.from_spot])
    const toSpot = await database.one<Spot>("select * from spots where id=$1", [stage.to_spot])

    const guide = await database.one<Guide>("select * from guides where id=$1", [stage.guide])
    let mode: "driving" | "bicycling" | "walking" = guide.transport_type === "BICYCLE" ? "bicycling" : "driving"
    const route = await getRoute(mode, fromSpot, toSpot)

    // Gets startDate, if previous stages have been calculated
    // Low success rate here but ammendDates will be called after computations anyway
    const startDate: string | null = fromSpot.date

    const stageData = await calculateStage(startDate, stage.id, guide, fromSpot, toSpot, route)

    await insert(stageData)

    const ended = new Date()
    const duration = ended.getTime() - start.getTime()
    const updateComputation: Patch<Computation> = {
      id: computationId,
      status: "success",
      duration: duration,
      ended,
    }

    await database.updateOne("computations", updateComputation)

    let ranFinalisation = await runFinalisationIfRequired(guide)

    await database.updateOne("stages", { id: stage.id, status: "ready" })

    return {
      success: true,
      ranFinalisation,
    }
  } catch (e) {
    console.error("Some error")
    console.error(e)

    const ended = new Date()
    const duration = ended.getTime() - start.getTime()

    const computation: Patch<Computation> = {
      id: computationId,
      status: "failed",
      ended,
      duration,
    }

    await database.updateOne("computations", computation)
    return {
      success: false,
      ranFinalisation: false,
    }
  }
}
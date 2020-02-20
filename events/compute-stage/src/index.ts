import action from "./action"
import { ComputeStageMessageBody, ComputeStageResult } from "./types"
import { log } from "@guided/logger"

export async function execute(body: ComputeStageMessageBody): Promise<ComputeStageResult> {
  log("execute compute-stage")
  return action(body)
}
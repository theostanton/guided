import action from "./action"
import { ComputeStageMessageBody, ComputeStageResult } from "./types"
import prepare, { Packet } from "./prepare"
import trigger from "./trigger"
import { log } from "@guided/logger"

export {
  prepare, Packet, trigger,
}

export async function execute(body: ComputeStageMessageBody): Promise<ComputeStageResult> {
  log("execute compute-stage")
  return action(body)
}
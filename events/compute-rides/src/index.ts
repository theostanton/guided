import action from "./action"
import { ComputeRidesMessageBody, ComputeRidesResult } from "./types"
import { log } from "@guided/logger"

export async function execute(body: ComputeRidesMessageBody): Promise<ComputeRidesResult> {
  log("execute compute-rides")
  return action(body)
}
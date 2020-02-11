import action from "./action"
import { ComputeRidesMessageBody, ComputeRidesResult } from "./types"

export async function execute(body: ComputeRidesMessageBody): Promise<ComputeRidesResult> {
  return action(body)
}
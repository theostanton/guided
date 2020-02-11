import { receive } from "@guided/events"
import action from "./action"
import { ComputeRidesMessageBody } from "./types"

export async function handler(event: any, context: any) {
  return receive(event, context, async (body: ComputeRidesMessageBody) => {
    await action(body)
  })
}
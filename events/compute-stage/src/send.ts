import { ComputeRideMessageBody } from "./index"
import * as events from "@guided/events"

export default async function send(body: ComputeRideMessageBody): Promise<void> {
  await events.send<ComputeRideMessageBody>(process.env.QUEUE_NAME_COMPUTE_STAGE!, body)
}
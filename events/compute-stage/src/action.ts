import { ComputeRideMessageBody } from "./index"
import { log, logJson } from "@guided/logger"

export default async function(body: ComputeRideMessageBody): Promise<void> {
  logJson(body, "handle compute-stage")
  log(body.someField, "body.someField")
}
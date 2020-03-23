import { Packet } from "../prepare"
import { executeConcurrently } from "@guided/utils"
import action from "../action"

import sqs from "./sqs"
import { log } from "@guided/logger"


export default async function trigger(packet: Packet): Promise<string[]> {
  log(process.env.STAGE!, "trigger() process.env.STAGE")

  switch (process.env.STAGE) {
    case "development":
      executeConcurrently(packet.computationIds, async (computationId: string) => {
        log(computationId, `executing and forgetting computationId=${computationId}`)
        await action({
          computationId,
        })
      }).then()
      return []
    case "testing":
      await executeConcurrently(packet.computationIds, async (computationId: string) => {
        log(computationId, `executing immediately computationId=${computationId}`)
        await action({
          computationId,
        })
      })
      return []
    default:
      console.log("SEND SQS EVENTS")
      console.log("process.env.COMPUTE_QUEUE_NAME=" + process.env.COMPUTE_QUEUE_NAME)
      const { QueueUrl } = await sqs.getQueueUrl({
        QueueName: process.env.COMPUTE_QUEUE_NAME!,
      }).promise()
      console.log("QueueUrl=" + QueueUrl)


      return executeConcurrently(packet.computationIds, async (computationId: string) => {
        const result = await sqs.sendMessage({
          QueueUrl: QueueUrl!,
          MessageBody: computationId,
        }).promise()
        return result.MessageId!
      })
  }
}
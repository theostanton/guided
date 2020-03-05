import { Packet } from "../prepare"
import { executeConcurrently } from "@guided/utils"
import action from "../action"

import sqs from "./sqs"


export default async function trigger(packet: Packet): Promise<string[]> {
  if (process.env.STAGE === "development") {
    executeConcurrently(packet.computationIds, async (computationId: string) => {
      await action({
        computationId,
      })
    }).then()
    return []
  } else {
    console.error("SEND SQS EVENTS")
    console.error("process.env.COMPUTE_QUEUE_NAME=" + process.env.COMPUTE_QUEUE_NAME)
    const { QueueUrl } = await sqs.getQueueUrl({
      QueueName: process.env.COMPUTE_QUEUE_NAME!,
    }).promise()
    console.error("QueueUrl=" + QueueUrl)


    return executeConcurrently(packet.computationIds, async (computationId: string) => {
      const result = await sqs.sendMessage({
        QueueUrl: QueueUrl!,
        MessageBody: computationId,
      }).promise()
      return result.MessageId!
    })
  }
}
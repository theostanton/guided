import { Packet } from "../prepare"
import { executeConcurrently } from "@guided/utils"
import action from "../action"
import http from "http"

import SQS from "./sqs"
import { log, logJson } from "@guided/logger"

function callEndpoint(packet: Packet): Promise<string[]> {
  log("callEndpoint")
  return executeConcurrently(packet.computationIds, async (computationId: string) => {
    return new Promise<string>((resolve, reject) => {
      const url = `${process.env.COMPUTE_ENDPOINT}/${computationId}`
      log("callEndpoint url=" + url)
      try {
        http.get(url, (res => {
          log(res.statusMessage!.toString(), "res")
          if (res.statusCode === 200) {
            resolve(res.statusMessage)
          } else {
            reject(res.statusMessage)
          }
        }))
      } catch (e) {
        console.error(e)
        reject(e)
      }
    })
  })
}

async function postMessages(packet: Packet): Promise<string[]> {
  log("postMessages")
  const sqs = SQS()
  console.log(
    `Send ${
      packet.computationIds.length
    } SQS events COMPUTE_QUEUE_NAME=${process.env
      .COMPUTE_QUEUE_NAME!}`,
  )
  log(
    sqs.config.credentials
      ? sqs.config.credentials.accessKeyId
      : "no accessKeyId",
    "sqs.config.credentials?.accessKeyId!",
  )
  const { QueueUrl } = await sqs
    .getQueueUrl({
      QueueName: process.env.AMEND_DATES_QUEUE_NAME!,
    })
    .promise()

  return executeConcurrently(
    packet.computationIds,
    async (computationId: string) => {
      const result = await sqs
        .sendMessage({
          QueueUrl: QueueUrl!,
          MessageBody: computationId,
        })
        .promise()
      return result.MessageId!
    },
  )
}

async function executeDirectly(packet: Packet): Promise<string[]> {
  await executeConcurrently(
    packet.computationIds,
    async (computationId: string) => {
      log(
        computationId,
        `executing immediately computationId=${computationId}`,
      )
      await action({
        computationId,
      })
    },
  )
  return []
}


export default async function trigger(packet: Packet): Promise<string[]> {
  log("trigger()")
  switch (true) {
    case !!process.env.COMPUTE_QUEUE_NAME:
      return postMessages(packet)
    case !!process.env.COMPUTE_ENDPOINT:
      return callEndpoint(packet)
    case process.env.STAGE === "testing":
      return executeDirectly(packet)
    default:
      console.error("Compute execution not triggered")
      throw new Error(`Compute execution not triggered`)
  }
}

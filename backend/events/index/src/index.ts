import sqs from "./sqs"
import { log, logJson } from "@guided/logger"

type EventBody = {}

export async function send<Body extends EventBody>(queueName: string, body: Body): Promise<void> {

  log(queueName, "queueName")
  const { QueueUrl } = await sqs.getQueueUrl({
    QueueName: queueName,
  }).promise()

  log(QueueUrl!, "QueueUrl")

  const result = await sqs.sendMessage({
    QueueUrl: QueueUrl!,
    MessageBody: JSON.stringify(body, null, 4),
  }).promise()

  logJson(result, "send() result")

}

export async function receive<Body extends EventBody>(event: any, _: any, action: (body: Body) => Promise<void>): Promise<any> {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "SQS event processed.",
        input: event,
      }),
    }
    const body = JSON.parse(event.Records[0].body) as Body
    await action(body)

    return response
  } catch (e) {
    console.error("receive() error")
    console.error(e)

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: e.message,
      }),
    }
  }
}
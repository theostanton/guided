import sqs from "./sqs"

export type QueueName = "compute-stage"

type EventBody = {}

export async function send<Body extends EventBody>(queue: QueueName, body: Body): Promise<void> {

  const { QueueUrl } = await sqs.getQueueUrl({
    QueueName: `${queue}-${process.env.STAGE}`,
  }).promise()

  await sqs.sendMessage({
    QueueUrl: QueueUrl!,
    MessageBody: JSON.stringify(body, null, 4),
  }).promise()

}
import { Options } from "."
import sqs from "../sqs"

export default async function(options: Options): Promise<void> {
  console.log("create() ")
  console.log(`options=${JSON.stringify(options, null, 4)}`)


  const result = await sqs.createQueue({
    QueueName: options.queue,
  }).promise()

  console.log(result)
}
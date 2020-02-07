import { Options } from "."
import sqs from "../sqs"
import { log } from "@guided/logger"

export default async function(options: Options): Promise<void> {
  console.log("list()")
  console.log(`options=${JSON.stringify(options, null, 4)}`)

  const lists = await sqs.listQueues().promise()

  lists.QueueUrls!.forEach(list => {
    log("list", list)
  })
}
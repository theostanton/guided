import AWS from "aws-sdk"
import { logJson } from "@guided/logger"

logJson(process.env, "process.env")

export default new AWS.SQS({
  region: process.env.DEFAULT_REGION,
// credentials: {
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
// },
})
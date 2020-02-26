import AWS from "aws-sdk"
import { log, logJson } from "@guided/logger"


AWS.config.update({ region: process.env._AWS_REGION })

log(AWS.config.region || "null", "AWS.config.region")
log(process.env._AWS_REGION || "null", "process.env._AWS_REGION")

export default new AWS.SQS({
  credentials: {
    accessKeyId: "AKIAR52WVAOHPEKFNX7X",
    secretAccessKey: "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",
  },
})

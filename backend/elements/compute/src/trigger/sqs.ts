import AWS from "aws-sdk"

export default new AWS.SQS({
  region: "eu-west-2",
  credentials: {
    accessKeyId: "AKIAR52WVAOHPEKFNX7X",
    secretAccessKey: "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",
  },
})

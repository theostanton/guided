import AWS from "aws-sdk"


if (!process.env.AWS_ACCESS_KEY_ID) {
  throw new Error("No process.env.AWS_ACCESS_KEY_ID for SQS")
}

export default new AWS.SQS({
  region: "eu-west-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

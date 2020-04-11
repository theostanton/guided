import AWS from "aws-sdk"

export default function(): AWS.SQS {
  return new AWS.SQS({
    region: process.env.DEFAULT_REGION,
    credentials: process.env.NODE_ENV === "development" ? {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    } : undefined,
  })
}
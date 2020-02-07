import "@guided/envs"
import AWS from "aws-sdk"

if (!process.env._AWS_REGION) {
  // throw new Error(`No regionfor AWS.config. process.env._AWS_REGION=${process.env._AWS_REGION}`)
  process.env._AWS_REGION = "eu-west-2"
}
AWS.config.update({ region: process.env._AWS_REGION })

export default new AWS.SQS({
  // endpoint: "http://localhost:4100",
})

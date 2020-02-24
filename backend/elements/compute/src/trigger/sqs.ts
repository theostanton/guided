import AWS from "aws-sdk"

AWS.config.update({ region: process.env._AWS_REGION })

export default new AWS.SQS()

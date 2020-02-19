import * as awsServerlessExpress from "aws-serverless-express"
import app from "./app"

const server = awsServerlessExpress.createServer(app('invoke'))

exports.handler = (event: any, context: any) => {
  awsServerlessExpress.proxy(server, event, context)
}
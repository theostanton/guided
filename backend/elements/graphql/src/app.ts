import combineMiddlewares from "./combineMiddlewares"
import { options, connection, Mode } from "./options"
import express, { Application } from "express"
import { postgraphile } from "postgraphile"

const { Pool } = require("pg")
import cors from "cors"
import { log, logJson } from "@guided/logger"

if (!process.env.POSTGRES_SCHEMA) {
  throw new Error("No POSTGRES_SCHEMA provided")
}


export default function(mode: Mode): Application {
  const app: express.Application = express()
  const _options = options(mode)
  const connectionString = connection()

  const pgPool = new Pool({
    connectionString,
  })

  log(connectionString, "connectionString")
  const combined = combineMiddlewares(
    cors(),
    postgraphile(
      pgPool,
      process.env.POSTGRES_SCHEMA,
      _options,
    ),
  )

  app.get("/health", function(req, res) {
    res.send("OK")
  })

  app.use(combined)

  return app
}
import combineMiddlewares from "./combineMiddlewares"
import { options, connection, Mode } from "./options"
import express, { Application } from "express"
import { postgraphile } from "postgraphile"

const { Pool } = require("pg")
import cors from "cors"
import { log } from "@guided/logger"

if (!process.env.POSTGRES_SCHEMA) {
  throw new Error("No POSTGRES_SCHEMA provided")
}


export default function(mode: Mode): Application {
  const app: express.Application = express()
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
      options(mode),
    ),
  )

  app.use(combined)

  return app
}
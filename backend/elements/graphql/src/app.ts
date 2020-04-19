import combineMiddlewares from "./combineMiddlewares"
import { connection, Mode, options } from "./options"
import express, { Application } from "express"
import { postgraphile } from "postgraphile"
import cors from "cors"

const { Pool } = require("pg")

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
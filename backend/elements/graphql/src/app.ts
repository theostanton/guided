import combineMiddlewares from "./combineMiddlewares"
import { options, connection, Mode } from "./options"
import express, { Application } from "express"
import { postgraphile } from "postgraphile"
import cors from "cors"

if (!process.env.POSTGRES_SCHEMA) {
  throw new Error("No POSTGRES_SCHEMA provided")
}


export default function(mode: Mode): Application {
  const app: express.Application = express()
  const combined = combineMiddlewares(
    cors(),
    postgraphile(
      connection(),
      process.env.POSTGRES_SCHEMA,
      options(mode),
    ),
  )

  app.use(combined)

  return app
}
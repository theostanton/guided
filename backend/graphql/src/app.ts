require("@guided/envs")

import { options, connection } from "./postgraphilerc"

import express from "express"
import { postgraphile } from "postgraphile"

const app = express()

app.use(
  postgraphile(
    connection,
    process.env.DATABASE_SCHEMA,
    options,
  ),
)

export default app
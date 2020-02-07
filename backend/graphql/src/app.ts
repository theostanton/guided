require("@guided/envs")
console.log(`OWNER_USER=${process.env.OWNER_USER}`)
console.log(`POSTGRES_HOST=${process.env.POSTGRES_HOST}`)

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
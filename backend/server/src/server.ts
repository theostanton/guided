require("@guided/tools")
console.log(`OWNER_USER=${process.env.OWNER_USER}`)
console.log(`POSTGRES_HOST=${process.env.POSTGRES_HOST}`)

import { options, connection, host } from "./postgraphilerc"

import express from "express"
import { postgraphile } from "postgraphile"

const app = express()

app.use(
  postgraphile(
    connection,
    "guided",
    options,
  ),
)

app.listen(process.env.POSTGRAPHILE_POST!)
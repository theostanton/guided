import { log } from "@guided/logger"

import ownerConnection from "./ownerConnection"

const connectionString = ownerConnection()
log(connectionString, "connection()")

if (!process.env.POSTGRES_SCHEMA) {
  throw new Error("No schema provided")
}

import { createPostGraphileSchema } from "postgraphile"
import { options } from "./options"

const { Pool } = require("pg")

async function main() {
  const pgPool = new Pool({
    connectionString
  })
  await createPostGraphileSchema(pgPool, process.env.POSTGRES_SCHEMA!, options("buildCache"))
  await pgPool.end()
}

main().then(() => {
  process.exit(0)
}, e => {
  // eslint-disable-next-line no-console
  console.error(e)
  process.exit(1)
})

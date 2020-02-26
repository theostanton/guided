import { log } from "@guided/logger"

log("connection()")
for (let i = 0; i < process.argv.length; i++) {
  const parts = process.argv[i].split("=")
  if (parts.length === 2 && parts[0] === "connection") {
    process.env.DATABASE_URL = parts[1]
    log("process.env.DATABASE_URL <- " + process.env.DATABASE_URL)
  }
}
if (!process.env.DATABASE_URL) {
  throw new Error("No connection provided")
}

//TODO actually pull in envs
process.env.JWT_SECRET = "someSecret"
process.env.POSTGRES_SCHEMA = "public"

import { createPostGraphileSchema } from "postgraphile"
import { options } from "./options"

const { Pool } = require("pg")

async function main() {
  const pgPool = new Pool({
    connectionString: process.env.DATABASE_URL,
  })
  await createPostGraphileSchema(pgPool, process.env.POSTGRES_SCHEMA!, options("buildCache"))
  await pgPool.end()
}

main().then(null, e => {
  // eslint-disable-next-line no-console
  console.error(e)
  process.exit(1)
})

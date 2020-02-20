require("dotenv").config({
  path: `../../.env`,
})

import { createPostGraphileSchema } from "postgraphile"
import { options, connection } from "./options"

const { Pool } = require("pg")

async function main() {
  const pgPool = new Pool({
    connectionString: connection(),
  })
  await createPostGraphileSchema(pgPool, process.env.POSTGRES_SCHEMA!, options("buildCache"))
  await pgPool.end()
}

main().then(null, e => {
  // eslint-disable-next-line no-console
  console.error(e)
  process.exit(1)
})

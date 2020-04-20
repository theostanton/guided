import { createPostGraphileSchema } from "postgraphile"
import { connection, options } from "./options"

const connectionString = connection()

const { Pool } = require("pg")

async function main() {
  const pgPool = new Pool({
    connectionString,
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

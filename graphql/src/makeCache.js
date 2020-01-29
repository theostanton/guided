const { createPostGraphileSchema } = require("postgraphile")
const { options } = require("../.postgraphilerc.js")
const { Pool } = require("pg")

const schemas = process.env.DATABASE_SCHEMAS.split(",")

async function main() {
  const pgPool = new Pool({
    connectionString: process.env.DATABASE_URL,
  })
  await createPostGraphileSchema(pgPool, schemas, {
    ...options,
    writeCache: `${__dirname}/../dist/postgraphile.cache`,
  })
  await pgPool.end()
}

main().then(null, e => {
  console.error(e)
  process.exit(1)
})

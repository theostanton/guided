console.log("exporting .postgraphilerc.js")

const connection = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
console.log(`connection=${connection}`)
console.log(`POSTGRAPHILE_HOST=${process.env.POSTGRAPHILE_HOST}`)

const host = process.env.POSTGRAPHILE_HOST && process.env.POSTGRAPHILE_HOST.length > 0 ? process.env.POSTGRAPHILE_HOST : undefined

module.exports = {
  options: {
    host,
    port: 5000,
    connection,
    schema: process.env.DATABASE_SCHEMAS.split(","),
    exportSchemaGraphql: "schema.graphql",
    watch: true,
    dynamicJson: true,
    showErrorStack: "json",
    noIgnoreIndexes: true,
    extendedErrors: "hint,detail,errcode",
    enhanceGraphiql: true,
    allowExplain: true,
    enableQueryBatching: true,
    legacyRelations: "omit",
  },
}

/*
--subscriptions \
  --watch \
  --dynamic-json \
  --no-setof-functions-contain-nulls \
  --no-ignore-rbac \
  --no-ignore-indexes \
  --show-error-stack=json \
  --extended-errors hint,detail,errcode \
  --append-plugins @graphile-contrib/pg-simplify-inflector \
  --export-schema-graphql schema.graphql \
  --graphiql "/" \
  --enhance-graphiql \
  --allow-explain \
  --enable-query-batching \
  --legacy-relations omit \
  --connection $DATABASE_URL \
  --schema app_public
 */
console.log("exporting .postgraphilerc.js")

const connection = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
let ownerConnection
if (process.env.OWNER_USER) {
  ownerConnection = `postgres://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
}
const host = process.env.POSTGRAPHILE_HOST && process.env.POSTGRAPHILE_HOST.length > 0 ? process.env.POSTGRAPHILE_HOST : undefined

module.exports = {
  options: {
    host,
    port: 5000,
    connection,
    ownerConnection,
    jwtSecret: "someSecret",
    jwtPgTypeIdentifier: "guided.jwt_token",
    jwtVerifyOptions:{
      audience:null
    },
    pgDefaultRole: "guided_anonymous",
    schema: process.env.DATABASE_SCHEMAS.split(","),
    exportSchemaGraphql: "schema.graphql",
    watch: true,
    cors: true,
    dynamicJson: true,
    showErrorStack: "json",
    noIgnoreIndexes: true,
    extendedErrors: "hint,detail,errcode",
    enhanceGraphiql: true,
    allowExplain: true,
    enableQueryBatching: true,
    legacyRelations: "omit",
    // subscriptions:true,
    // simpleSubscriptions:true,
    // plugins:['@graphile/pg-pubsub']
  },
}
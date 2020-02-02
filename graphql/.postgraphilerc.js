if (process.env.DOT_ENV_FILE) {
  require("dotenv").config({
    path: process.env.DOT_ENV_FILE,
  })
  // process.env.POSTGRES_HOST = "0.0.0.0"
}


console.log("exporting .postgraphilerc.js")

const connection = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
let ownerConnection
if (process.env.OWNER_USER) {
  ownerConnection = `postgres://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
}

console.log("connection=" + connection)
console.log("ownerConnection=" + ownerConnection)

let workDir = ""
if (process.env.WORK_DIR) {
  workDir = process.env.WORK_DIR
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
    jwtVerifyOptions: {
      jwtPgTypeIdentifier: "guided.jwt_token",
      audience: null,
    },
    pgDefaultRole: "anonymous",
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
    // plugins: [`../plugins/srv/index.js`],
  },
}
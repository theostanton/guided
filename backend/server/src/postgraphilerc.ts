import { PostGraphileOptions } from "postgraphile"

console.log("exporting .postgraphilerc.js")

export const connection = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
let ownerConnectionString
if (process.env.OWNER_USER) {
  ownerConnectionString = `postgres://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
}

console.log("connection=" + connection)
console.log("ownerConnectionString=" + ownerConnectionString)

let workDir = ""
if (process.env.WORK_DIR) {
  workDir = process.env.WORK_DIR
}

export const host = process.env.POSTGRAPHILE_HOST && process.env.POSTGRAPHILE_HOST.length > 0 ? process.env.POSTGRAPHILE_HOST : undefined

export const options: PostGraphileOptions = {
  ownerConnectionString,
  jwtSecret: "someSecret",
  jwtPgTypeIdentifier: "guided.jwt_token",
  jwtVerifyOptions: {
    audience: undefined,
  },
  pgDefaultRole: "guided_anonymous",
  watchPg: true,
  // exportGqlSchemaPath: "../schema.graphql",
  enableCors: true,
  dynamicJson: true,
  showErrorStack: "json",
  // noIgnoreIndexes: true,
  // extendedErrors: "hint,detail,errcode",
  enhanceGraphiql: true,
  graphiql: true,
  allowExplain: true,
  enableQueryBatching: true,
  legacyRelations: "omit",
  appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
}
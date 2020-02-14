import { PostGraphileOptions } from "postgraphile"
import plugins from "./plugins"
import { log } from "@guided/logger"

const appendPlugins = [
  ...plugins,
  require("@graphile-contrib/pg-simplify-inflector"),
]

export let connection: string
if (process.env.DATABASE_URL) {
  connection = process.env.DATABASE_URL
} else {
  connection = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
}

let ownerConnectionString

console.log("connection=" + connection)

log(process.env.POSTGRAPHILE_WATCH!, "POSTGRAPHILE_WATCH")
let watchPg, readCache, writeCache = undefined
if (process.env.POSTGRAPHILE_WATCH === "true") {
  if (process.env.OWNER_USER) {
    ownerConnectionString = `postgres://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
  }
  watchPg = true
  writeCache = "cache"
} else {
  // readCache = "cache"
  watchPg = false
}
console.log("ownerConnectionString=" + ownerConnectionString)

export const options: PostGraphileOptions = {
  ownerConnectionString,
  jwtSecret: "someSecret",
  jwtPgTypeIdentifier: "guided.jwt_token",
  jwtVerifyOptions: {
    audience: undefined,
  },
  disableQueryLog: false,
  exportGqlSchemaPath: "../../schema.graphql",
  sortExport: true,
  pgDefaultRole: "guided_anonymous",
  watchPg,
  readCache,
  writeCache,
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
  appendPlugins,
}
import { PostGraphileOptions } from "postgraphile"
import { Plugin } from "graphile-build"
import customPlugins from './plugins'

export type Mode = "watch" | "buildCache" | "invoke"

function plugins(): Plugin[] {
  return [
    ...customPlugins,
    require("@graphile-contrib/pg-simplify-inflector"),
  ]
}

export function connection(): string {
  return `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
}


export function watch(): Pick<PostGraphileOptions, "watchPg" | "exportGqlSchemaPath" | "writeCache" | "ownerConnectionString" | "disableQueryLog" | "sortExport" | "graphiql" | "allowExplain"> {

  if (!process.env.OWNER_USER) {
    throw new Error("Need OWNER variables to watch")
  }

  return {
    watchPg: true,
    exportGqlSchemaPath: "../../schema.graphql",
    graphiql: true,
    allowExplain: true,
    ownerConnectionString: `postgres://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`,
  }

}

export function createCache(): Pick<PostGraphileOptions, "watchPg" | "exportGqlSchemaPath" | "writeCache" | "ownerConnectionString" | "disableQueryLog" | "sortExport" | "graphiql" | "allowExplain"> {

  if (!process.env.OWNER_USER) {
    throw new Error("Need OWNER variables to create cache")
  }

  return {
    watchPg: false,
    exportGqlSchemaPath: "../../schema.graphql",
    writeCache: "dist/cache",
    sortExport: true,
    graphiql: false,
    allowExplain: false,
    ownerConnectionString: `postgres://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`,
  }

}

export function jwt(): Pick<PostGraphileOptions, "jwtSecret" | "jwtPgTypeIdentifier" | "jwtVerifyOptions"> {
  return {
    jwtSecret: process.env.JWT_SECRET!,
    jwtPgTypeIdentifier: "guided.jwt_token",
    jwtVerifyOptions: {
      audience: undefined,
    },
  }
}

export function fromCache(): Pick<PostGraphileOptions, "watchPg" | "readCache" | "enableQueryBatching"> {

  if (process.env.POSTGRAPHILE_WATCH === "true") {
    throw new Error()
  }

  return {
    watchPg: false,
    readCache: "cache",
    enableQueryBatching: false,
  }

}

export function options(mode: Mode): PostGraphileOptions {

  if (!process.env.POSTGRES_USER) {
    throw new Error("Variables not loaded")
  }

  let cacheOptions: {}
  switch (mode) {
    case "buildCache":
      cacheOptions = createCache()
      break
    case "invoke":
      cacheOptions = fromCache()
      break
    case "watch":
      cacheOptions = watch()
      break

  }

  return {
    ...cacheOptions,
    ...jwt(),
    disableQueryLog: false,
    pgDefaultRole: "guided_anonymous",
    enableCors: true,
    dynamicJson: true,
    showErrorStack: "json",
    appendPlugins: plugins(),
  }

}
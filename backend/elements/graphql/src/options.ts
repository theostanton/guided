import { PostGraphileOptions } from "postgraphile"
import { Plugin } from "graphile-build"
import customPlugins from "./plugins"
import { log } from "@guided/logger"
import path from "path"

export type Mode = "watch" | "buildCache" | "invoke" | "serve"

function plugins(): Plugin[] {
  return [
    ...customPlugins,
    require("@graphile-contrib/pg-simplify-inflector").default,
    require("@graphile/subscriptions-lds").default,
  ]
}

export function connection(): string {
  if (process.env.DATABASE_URL) {
    log(process.env.DATABASE_URL, "connection() process.env.DATABASE_URL")
    return process.env.DATABASE_URL
  } else if (!process.env.POSTGRES_USER) {
    throw new Error("No envs provided")
  } else {
    return `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
  }
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

export function buildCache(): Pick<PostGraphileOptions, "watchPg" | "exportGqlSchemaPath" | "writeCache" | "ownerConnectionString" | "disableQueryLog" | "sortExport" | "graphiql" | "allowExplain"> {

  if (!process.env.OWNER_USER && !process.env.DATABASE_URL) {
    throw new Error("Need OWNER variables to create cache")
  }

  let ownerConnectionString = `postgres://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
  return {
    watchPg: false,
    exportGqlSchemaPath: "../../schema.graphql",
    writeCache: "dist/cache",
    sortExport: true,
    graphiql: false,
    allowExplain: false,
    ownerConnectionString,
  }

}

export function jwt(): Pick<PostGraphileOptions, "jwtSecret" | "jwtPgTypeIdentifier" | "jwtVerifyOptions"> {
  return {
    jwtSecret: process.env.JWT_SECRET!,
    jwtPgTypeIdentifier: "public.jwt_token",
    jwtVerifyOptions: {
      audience: undefined,
    },
  }
}

export function invoke(): Pick<PostGraphileOptions, "watchPg" | "readCache" | "enableQueryBatching"> {

  if (process.env.POSTGRAPHILE_WATCH === "true") {
    throw new Error()
  }

  if (!process.env.POSTGRES_USER && !process.env.DATABASE_URL) {
    throw new Error("Variables not loaded")
  }

  return {
    watchPg: false,
    readCache: "cache",
    enableQueryBatching: false,
  }

}

export function serve(): Pick<PostGraphileOptions, "watchPg" | "readCache" | "allowExplain" | "graphiql" | "enableQueryBatching" | "ownerConnectionString"> {

  if (process.env.POSTGRAPHILE_WATCH === "true") {
    throw new Error()
  }

  if (!process.env.POSTGRES_USER && !process.env.DATABASE_URL) {
    throw new Error("Variables not loaded")
  }


  if (!process.env.OWNER_USER && !process.env.DATABASE_URL) {
    throw new Error("Need OWNER variables for Live queries")
  }

  const ownerConnectionString = `postgresql://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
  log(ownerConnectionString, "ownerConnectionString")

  return {
    watchPg: false,
    readCache: path.resolve(__dirname, "cache"),
    enableQueryBatching: false,
    graphiql: true,
    allowExplain: true,
    ownerConnectionString,
  }

}

const CACHE_OPTIONS: { [mode in Mode]: () => Partial<PostGraphileOptions> } = {
  buildCache, invoke, serve, watch,
}

export function options(mode: Mode): PostGraphileOptions {

  const cacheOptions = CACHE_OPTIONS[mode]()
  return {
    ...cacheOptions,
    ...jwt(),
    graphqlRoute: "/",
    disableQueryLog: false,
    pgDefaultRole: "guided_anonymous",
    enableCors: true,
    dynamicJson: true,
    showErrorStack: true,
    ignoreRBAC: false,
    subscriptions: true,
    extendedErrors: ["hint", "detail", "errcode"],
    appendPlugins: plugins(),
    live: true,
  }

}
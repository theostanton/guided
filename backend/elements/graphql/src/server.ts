if (process.env.NODE_ENV !== "development") {
  require("dotenv").config({
    path: `.env`,
  })
}

import { log } from "@guided/logger"
log(process.env.APP_VERSION!, "Starting server ")

import app from "./app"


if (!process.env.STAGE) {
  throw new Error("ENVS error. No STAGE")
}

process.env.DEBUG = "graphile-build-pg:warn"
app(process.env.NODE_ENV === "development" ? "watch" : "serve").listen(
  process.env.POSTGRAPHILE_PORT!,
)
log(`Listening on ${process.env.POSTGRAPHILE_PORT}`)

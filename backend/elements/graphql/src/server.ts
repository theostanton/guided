//TODO env pathh and mode as env vars
if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: `../../.env`,
  })
} else {
  require("dotenv").config({
    path: `.env`,
  })
}

log(process.env.APP_VERSION!, "Starting server")

import { log } from "@guided/logger"

if (!process.env.STAGE) {
  throw new Error("ENVS error. No STAGE")
}

import app from "./app"

app(process.env.NODE_ENV === "development" ? "watch" : "serve").listen(process.env.POSTGRAPHILE_PORT!)
log(`Listening on ${process.env.POSTGRAPHILE_PORT}`)

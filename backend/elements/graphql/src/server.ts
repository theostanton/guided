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


import { log } from "@guided/logger"

import app from "./app"

app(process.env.NODE_ENV === "development" ? "watch" : "serve").listen(process.env.POSTGRAPHILE_PORT!)
log(`Listening on ${process.env.POSTGRAPHILE_PORT}`)

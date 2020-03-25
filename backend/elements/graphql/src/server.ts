if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: `../../.env`,
  })
}

import app from "./app"
import { log } from "@guided/logger"

log(`Gonna listen on ${process.env.POSTGRAPHILE_PORT}`)
app("serve").listen(process.env.POSTGRAPHILE_PORT!)
log(`Listening on ${process.env.POSTGRAPHILE_PORT}`)

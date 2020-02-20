require("dotenv").config({
  path: `../../.env`,
})

import app from "./app"
import { log } from "@guided/logger"

app("watch").listen(process.env.POSTGRAPHILE_PORT!)
log(`Listening on ${process.env.POSTGRAPHILE_PORT}`)

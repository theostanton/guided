if (process.env.STAGE) {
  require("dotenv").config({
    path: `./.${process.env.STAGE}.env`,
  })
} else {
  throw new Error("Requires STAGE env")
}

import app from "./app"
import { log } from "@guided/logger"

app("watch").listen(process.env.POSTGRAPHILE_PORT!)
log(`Listening on ${process.env.POSTGRAPHILE_PORT}`)

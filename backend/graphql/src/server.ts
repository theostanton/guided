import app from "./app"
import { log } from "@guided/logger"

app.listen(process.env.POSTGRAPHILE_PORT!)
log(`Listing on ${process.env.POSTGRAPHILE_PORT}`)

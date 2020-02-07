import { LocalLogger } from "./LocalLogger"

export interface Logger {
  log(message: string): void

  info(message: string): void

  error(message: string): void
}

let logger: Logger
switch (process.env.STAGE) {
  case "local":
    logger = new LocalLogger()
    break
  case "staging":
    logger = new LocalLogger()
    break
  default:
    throw new Error(`Exporting Logger with no process.env.STAGE`)
}

export const { log, error: logError, info: logInfo } = logger
export default logger

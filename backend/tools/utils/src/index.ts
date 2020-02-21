import executeConcurrently from "./executeConcurrently"
import executeWithContext from "./executeWithContext"
import executeSequentially from "./executeSequentially"
import * as Constants from "./constants"
import {
  getDate,
} from "./dates"

export {
  executeSequentially,
  executeWithContext,
  executeConcurrently,
  Constants,
  getDate,
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
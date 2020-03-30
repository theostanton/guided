import executeConcurrently from "./executeConcurrently"
import executeWithContext from "./executeWithContext"
import executeSequentially from "./executeSequentially"
import * as Constants from "./constants"

export {
  executeSequentially,
  executeWithContext,
  executeConcurrently,
  Constants,
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
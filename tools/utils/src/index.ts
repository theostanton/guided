import executeConcurrently from "./executeConcurrently"
import executeWithContext from "./executeWithContext"
import executeSequentially from "./executeSequentially"

export {
  executeSequentially,
  executeWithContext,
  executeConcurrently,
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
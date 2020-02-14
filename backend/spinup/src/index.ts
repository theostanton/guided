import example from "./example"
import create from "./create"
import truncate from "./truncate"

export type Action = "create" | "truncate" | "example"

const ACTIONS: { [action in Action]: () => Promise<void> } = {
  create, truncate, example,
}

export default async function(action: Action): Promise<void> {
  if (action in ACTIONS) {
    await ACTIONS[action]
  } else {
    throw new Error(`${action} is not a valid action`)
  }
}
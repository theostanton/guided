import example from "./example"
import create from "./create"
import truncate from "./truncate"
import privelages from "./privelages"
import populate from "./populate"
import drop from "./drop"

export type Action = "create" | "truncate" | "example" | "privelages" | "populate" | "drop"

export const actions: { [action in Action]: () => Promise<void> } = {
  create, truncate, example, privelages, populate, drop,
}

export default async function(action: Action): Promise<void> {
  if (action in actions) {
    await actions[action]()
  } else {
    throw new Error(`${action} is not a valid action`)
  }
}
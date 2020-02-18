import { logJson } from "@guided/logger"

logJson(__dirname, "__dirname")
import create from "./create"
import truncate from "./truncate"
import privelages from "./privelages"
import populate from "./populate"
import drop from "./drop"
import load_temperatures from "./load_temperatures"
import spinup from "./spinup"
import { Builder, Contents } from "./builder"

export {
  spinup, Contents, Builder,
}

export type Action = "create" | "truncate" | "privelages" | "populate" | "drop" | "load_temperatures"

export const actions: { [action in Action]: () => Promise<void> } = {
  create, truncate, privelages, populate, drop, load_temperatures,
}

export default async function(action: Action): Promise<void> {
  if (action in actions) {
    await actions[action]()
  } else {
    throw new Error(`${action} is not a valid action`)
  }
}
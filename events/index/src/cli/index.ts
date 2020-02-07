import commandLineArgs, { OptionDefinition } from "command-line-args"

const optionDefinitions: OptionDefinition[] = [
  { name: "command", defaultOption: true },
  { name: "stage", type: String, defaultValue: "local" },
  { name: "queue", alias: "q", type: String },
  { name: "body", alias: "b", type: String },
]

const options: Options = <Options>commandLineArgs(optionDefinitions)
process.env.STAGE = options.stage
require("@guided/envs")

import send from "./send"
import create from "./create"
import list from "./list"
import listen from "./listen"

type Command = "send" | "create" | "list" | "listen"

export type Options = {
  command: Command,
  stage: "local" | "staging",
  queue: string,
  body?: string
}

export const COMMANDS: { [key in Command]: (options: Options) => Promise<void> } = {
  create, send, list, listen,
}

async function execute(): Promise<void> {
  await COMMANDS[options.command](options)
}

execute().then()




import chalk from "chalk"
import { toJS } from "mobx"

export function logJson(object: any, label?: string): void {
  if (label) {
    console.log(chalk.keyword("orange")(label))
  }
  console.log(JSON.stringify(object, null, 4))
}

export function log(message: string, label?: string): void {
  if (label) {
    console.log(chalk.keyword("orange")(label))
  }
  console.log(message)
}

function unObservify(object: any): any {
  return tojs
}

export function logObject(object: any, label?: string): void {
  if (label) {
    console.log(chalk.keyword("orange")(label))
  }
  object = toJS(object)
  console.log(object)
}

export function logError(message: string): void {
  console.error(message)
}

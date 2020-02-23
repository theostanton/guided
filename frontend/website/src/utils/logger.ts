import chalk from "chalk"

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

export function logObject(object: any, label?: string): void {
  if (label) {
    console.log(chalk.keyword("orange")(label))
  }
  console.log(object)
}

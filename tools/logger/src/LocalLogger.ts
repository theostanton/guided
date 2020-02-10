import { Logger } from "."

export class LocalLogger implements Logger {

  error(error: any) {
    throw error
  }

  throw(message: string): void {
    new Error(message)
  }

  info(message: string): void {
    console.info(message)
  }

  json(object: any, label?: string): void {
    if (label) {
      console.log(label)
    }
    console.log(JSON.stringify(object, null, 4))
  }

  log(message: string, label?: string): void {
    console.log('TEST!?')
    if (label) {
      console.log("--" + label + "--")
    }
    console.log(message)
  }

}
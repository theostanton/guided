import cuid from "cuid"
import client from "./client"

export function generateId(prefix: string): string {
  return `${prefix}_${cuid.slug()}`
}

export {
  client,
}

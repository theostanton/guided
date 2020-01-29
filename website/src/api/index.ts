import client from "./client"

import cuid from "cuid"

export function generateId(prefix: string): string {
  return `${prefix}_${cuid.slug()}`
}

export {
  client
}


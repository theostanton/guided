import { logJson } from "@guided/logger"

if (!process.env.DATABASE_URL && !process.env.OWNER_USER) {
  logJson(process.env, "process.env")
  throw new Error(`No envs loaded`)
}

import * as pgPromise from "pg-promise"
import PgPromise from "pg-promise"
import cuid from "cuid"
import Extensions, { extend } from "./extensions"
import { Spot, User, Guide, Ride, Stage, StageStatus, SpotStatus, RideStatus } from "./types"

import {
  insertOne, insertMany, updateMany,
} from "./utils"

export {
  insertOne,
  insertMany,
  updateMany,
}

export let DATABASE_URL: string
if (process.env.DATABASE_URL) {
  DATABASE_URL = process.env.DATABASE_URL
} else {
  DATABASE_URL = `postgres://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
}

logJson(DATABASE_URL, "DATABASE_URL")


export function generateId(prefix: string): string {
  return `${prefix}_${cuid.slug()}`
}

const options: pgPromise.IInitOptions<Extensions> = {
  schema: process.env.POSTGRES_SCHEMA,
  extend,
}

export { Spot, User, Guide, Ride, Stage, SpotStatus, StageStatus, RideStatus }
const pgp = PgPromise(options)

export const database = pgp(DATABASE_URL)
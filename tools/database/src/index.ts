import "@guided/envs"
import * as pgPromise from "pg-promise"
import PgPromise from "pg-promise"
import cuid from "cuid"
import Extensions, { extend } from "./extensions"
import { Spot, User, Guide, Ride } from "./types"
import {
  insertOne, insertMany,
} from "./utils"

export const DATABASE_URL = `postgres://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`


export {
  insertOne,
  insertMany,
}

export function generateId(prefix: string): string {
  return `${prefix}_${cuid.slug()}`
}

const options: pgPromise.IInitOptions<Extensions> = {
  schema: process.env.DATABASE_SCHEMA,
  extend,
}

export { Spot, User, Guide, Ride }
const pgp = PgPromise(options)

export const database = pgp(DATABASE_URL)
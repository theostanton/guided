function ownerConnection(): string {
  if (process.env.TEST_DATABASE_URL) {
    return process.env.TEST_DATABASE_URL
  } else if (!process.env.OWNER_USER) {
    throw new Error("Need OWNER_ variables")
  }

  return `postgres://${process.env.OWNER_USER}:${encodeURIComponent(process.env.OWNER_PASSWORD!)}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
}

const ownerConnectionString = ownerConnection()

import * as pgPromise from "pg-promise"
import PgPromise from "pg-promise"
import cuid from "cuid"
import Extensions, { extend, Patch } from "./extensions"
import {
  Computation,
  ComputationStatus,
  Follow,
  Guide,
  Ride,
  RideStatus,
  Spot,
  SpotStatus,
  Stage,
  StageStatus,
  TransportType,
  User,
} from "./types"

import { insertMany, insertOne, updateMany, updateOne } from "./utils"


export {
  insertOne,
  insertMany,
  updateOne,
  updateMany,
  Patch,
}


export function generateId(prefix: string): string {
  if (process.env.STAGE === "testig") {
    return `t_${prefix}_${cuid.slug()}`
  } else {
    return `${prefix}_${cuid.slug()}`
  }
}

const options: pgPromise.IInitOptions<Extensions> = {
  schema: process.env.POSTGRES_SCHEMA,
  extend,
}

export {
  Spot,
  User,
  Guide,
  Ride,
  Stage,
  Computation,
  SpotStatus,
  StageStatus,
  RideStatus,
  ComputationStatus,
  Follow,
  TransportType,
}
const pgp = PgPromise(options)


export const database = pgp(ownerConnectionString)

export function end() {
  pgp.end()
}

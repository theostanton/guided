function ownerConnection(): string {
  if (!process.env.OWNER_USER) {
    throw new Error("Need OWNER_ variables")
  }

  return `postgres://${process.env.POSTGRES_USER}:${encodeURIComponent(process.env.POSTGRES_PASSWORD!)}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
}

const ownerConnectionString = ownerConnection()

import * as pgPromise from "pg-promise"
import PgPromise from "pg-promise"
import cuid from "cuid"
import Extensions, { extend } from "./extensions"
import {
  Spot,
  User,
  Guide,
  Ride,
  Stage,
  Computation,
  StageStatus,
  SpotStatus,
  RideStatus,
  ComputationStatus,
} from "./types"

import {
  insertOne, insertMany, updateMany, updateOne,
} from "./utils"


export {
  insertOne,
  insertMany,
  updateOne,
  updateMany,
}


export function generateId(prefix: string): string {
  return `${prefix}_${cuid.slug()}`
}

const options: pgPromise.IInitOptions<Extensions> = {
  schema: process.env.POSTGRES_SCHEMA,
  extend,
}

export { Spot, User, Guide, Ride, Stage, Computation, SpotStatus, StageStatus, RideStatus, ComputationStatus }
const pgp = PgPromise(options)


export const database = pgp(ownerConnectionString)

export function end() {
  pgp.end()
}

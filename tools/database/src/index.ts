import "@guided/envs"
import * as pgPromise from "pg-promise"
import PgPromise from "pg-promise"
import { Extensions } from "./extensions"

export const DATABASE_URL = `postgres://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`

const options: pgPromise.IInitOptions<Extensions> = {
  schema: process.env.DATABASE_SCHEMA,
  extend(db) {
    db.findUser = userId => {
      return db.one("SELECT * FROM Users WHERE id = $1", userId)
    }
  },
}

const pgp = PgPromise(options)

export const database = pgp(DATABASE_URL)
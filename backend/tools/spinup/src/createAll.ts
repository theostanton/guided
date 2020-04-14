import { log, logJson } from "@guided/logger"
import { database } from "@guided/database"


export default async function(): Promise<void> {
  log("createAll")

  const tables = await database.manyOrNone(`SELECT *
                                            FROM pg_catalog.pg_tables
                                            WHERE schemaname != 'pg_catalog'
                                              AND schemaname = $1`, [process.env.POSTGRES_SCHEMA])

  logJson(tables, "tables")
}
import execute from "./."
import { database } from "@guided/database"
import { cleanDatabase } from "../index.test"


beforeEach(cleanDatabase)
test("Clean database", async () => {
  await execute()
  const users = await database.manyOrNone(`SELECT *
                                           from users`)
  expect(users.length).toBe(1)
})
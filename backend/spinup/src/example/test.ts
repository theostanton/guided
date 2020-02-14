import execute from "./."
import { executeBeforeEach } from "../index.test"
import { database } from "@guided/database"

beforeEach(executeBeforeEach)

test("Executes in sequence", async () => {
  await execute()
  const users = await database.manyOrNone(`SELECT *
                                           from users`)
  expect(users.length).toBe(1)
})
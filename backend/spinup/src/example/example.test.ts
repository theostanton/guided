import execute from "../."
import { populateTables } from "../tests"
import { database } from "@guided/database"


beforeEach(async () => {
  await populateTables()
})
xtest("Simple add 1 user", async () => {
  const usersBefore = await database.manyOrNone(`SELECT *
                                                 from users`)
  expect(usersBefore.length).toBe(1)
  await execute()
  const usersAfter = await database.manyOrNone(`SELECT *
                                                from users`)
  expect(usersAfter.length).toBe(2)
})
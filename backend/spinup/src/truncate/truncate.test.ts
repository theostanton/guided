import { actions } from "../."
import { dropTables } from "../tests"
import { database } from "@guided/database"

beforeAll(async () => {
  await dropTables()
  await actions.truncate()
})

describe("Truncate ", () => {
  it("removes all users", async () => {
    await actions.truncate()
    const usersAfter = await database.manyOrNone(`SELECT *
                                                  from users`)
    expect(usersAfter.length).toBe(0)
  })
})
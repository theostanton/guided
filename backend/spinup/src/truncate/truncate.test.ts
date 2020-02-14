import { actions } from "../."
import { cleanDatabase } from "../index.test"
import { database } from "@guided/database"

beforeEach(cleanDatabase)

describe("product ", () => {
  it("test that needs data", async () => {
    const usersBefore = await database.manyOrNone(`SELECT *
                                                   from users`)

    expect(usersBefore.length).toBeGreaterThan(0)

    await actions.truncate()

    const usersAfter = await database.manyOrNone(`SELECT *
                                                  from users`)
    expect(usersAfter.length).toBe(0)
  })
})
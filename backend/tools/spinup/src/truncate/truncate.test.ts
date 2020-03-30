import { actions } from "../."
import { database } from "@guided/database"

// beforeAll(async () => {
//   await actions.create()
//   await actions.truncate()
// })

xdescribe("Truncate ", () => {
  it("removes all users", async () => {
    const usersAfter = await database.manyOrNone(`SELECT *
                                                  from users`)
    expect(usersAfter.length).toBe(0)
  })
})
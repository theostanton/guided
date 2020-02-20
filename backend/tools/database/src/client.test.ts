import { database } from "./index"

describe("Creates client", () => {
  it("Connects", async () => {
    const users = await database.manyOrNone("select * from users")
    expect(users).toBeDefined()
  })
})
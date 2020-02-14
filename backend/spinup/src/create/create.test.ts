import { actions } from "../."
import { dropTables } from "../tests"

beforeAll(async () => {
  await dropTables()
  await actions.create()
})

describe("Create tables", () => {
  it("Creates users", async () => {
  })
})
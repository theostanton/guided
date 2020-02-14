import { actions } from "../."
import { clearDatabase } from "../index.test"

beforeAll(async () => {
  await clearDatabase()
  await actions.create()
})

describe("Create tables", () => {
  it("Creates users", async () => {

  })
})
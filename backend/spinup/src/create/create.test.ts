import { actions } from "../."
import { clearDatabase } from "../tests"

beforeAll(async () => {
  await clearDatabase()
  await actions.create()
})

describe("Create tables", () => {
  it("Creates users", async () => {
  })
})
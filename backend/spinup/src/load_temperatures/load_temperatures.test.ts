import { actions } from "../index"

beforeAll(async () => {
  // await truncateTables()
})

describe("Populate temperatures", () => {
  it("runs", async () => {
    await actions.load_temperatures()
  })
})
import execute from "../."

describe("product ", () => {
  it("test that needs data", async () => {
    console.log("execute in sequence test")
    await execute("truncate")
    expect(2001).toBe(2002)
  })
})
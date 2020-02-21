import { plusDays } from "./dates"

describe("plusDays", () => {

  it("Should return same result when adding 0 days", () => {
    const input = "2020-08-01"
    const output = plusDays(input, 0)
    expect(output).toBe(input)
  })
  it("Should return next days date when adding 1 day", () => {
    const input = "2020-08-01"
    const output = plusDays(input, 1)
    expect(output).toBe("2020-08-02")
  })

  it("Should return yesterdays date when adding -1 day", () => {
    const input = "2020-08-01"
    const output = plusDays(input, -1)
    expect(output).toBe("2020-07-31")
  })
})
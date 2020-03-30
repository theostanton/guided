import { database } from "@guided/database"
import { executeFile } from "../sequence"


describe("Privelages individually", () => {

  it("Schema", async () => {
    await executeFile("src/privelages/1.schema.sql")
  })

  it("Grants", async () => {
    await executeFile("src/privelages/2.grant.sql")
  })

  it("Policies", async () => {
    await executeFile("src/privelages/3.policies.sql")
  })
})
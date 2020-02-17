// import { database } from "@guided/database"
import { actions, spinup, Contents, Builder } from "@guided/spinup"

beforeAll(async () => {
  await actions.drop()
  await actions.create()
})

const LAT = 51.5074
const LONG = 0.1278

describe("When single spot", () => {

  const contents: Contents = Builder.create()
    .addGuide("First guide", (builder) => {
      builder.nextSpot(LAT, LONG, 2, "London town")
    })
    .build()

  beforeAll(async () => {
    await spinup(contents)
  })

  it("Creates dataset", async () => {
    // const users = await database.manyOrNone("select username from users")
    // logJson(users, "users")
    expect(0).toBe(0)
  })
})
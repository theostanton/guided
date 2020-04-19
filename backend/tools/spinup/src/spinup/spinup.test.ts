import { database, Guide, Spot, User } from "@guided/database"
import { Contents, spinup } from "../index"
import UserBuilder from "../builder/UserBuilder"
import faker from "faker"

const LAT_1 = 51.5074
const LONG_1 = 0.1278
const LAT_2 = 52.1234
const LONG_2 = -1.1234

describe("When inserting 2 spots with builder and no date", () => {

  const GUIDE_TITLE = faker.random.words(3)
  const USERNAME = faker.internet.userName()
  const EMAIL = faker.internet.email()
  let guideId: string

  const contents: Contents = UserBuilder.create(EMAIL, USERNAME)
    .addGuide(GUIDE_TITLE, (builder) => {
      guideId = builder.guideId
      builder.nextSpot(LAT_1, LONG_1, 2, "Spot 1")
      builder.nextSpot(LAT_2, LONG_2, 5, "Spot 2")
    })
    .build()

  beforeAll(async () => {
    await spinup(contents)
  })

  it("Inserts user", async () => {
    const user = await database.one<User>("select * from users where username=$1", [USERNAME])
    expect(user.email).toBe(EMAIL)
    expect(user.username).toBe(USERNAME)
  })

  it("Inserts guide", async () => {
    const guide = await database.one<Guide>("select * from guides where id=$1", [guideId])
    expect(guide).toBeDefined()
    expect(guide.title).toBe(GUIDE_TITLE)
    expect(guide.slug).toBeDefined()
    expect(guide.start_date).toBe(null)
  })

  it("Inserts spots", async () => {
    const spots = await database.manyOrNone<Spot>("select * from spots where guide=$1", [guideId])
    expect(spots.length).toBe(2)

    expect(spots[0].label).toBe("Spot 1")
    expect(spots[0].lat).toBe(LAT_1)
    expect(spots[0].long).toBe(LONG_1)
    expect(spots[0].locked).toBe(true)
    expect(spots[0].country).toBeDefined()
    expect(spots[0].location).toBeDefined()
    expect(spots[0].stage).toBe(null)

    expect(spots[1].label).toBe("Spot 2")
    expect(spots[1].lat).toBe(LAT_2)
    expect(spots[1].long).toBe(LONG_2)
    expect(spots[1].locked).toBe(true)
    expect(spots[1].country).toBeDefined()
    expect(spots[1].location).toBeDefined()
    expect(spots[1].stage).toBe(null)

    const guide = await database.one<Guide>("select * from guides where id=$1", [guideId])

    expect(spots[0].guide).toBe(guide.id)
    expect(spots[1].guide).toBe(guide.id)
  })
})
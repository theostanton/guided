import faker from "faker"
import { database, generateId } from "@guided/database"
import { UserBuilder } from "./index"
import { spinup } from "../index"
import { logJson } from "@guided/logger"

describe("Start date handling", () => {

  const owner: string = faker.internet.userName()
  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  const START_YEAR: number = 2019
  const START_MONTH: number = 8
  const START_DATE: number = 1

  beforeAll(async () => {

    const contents = UserBuilder.create(faker.internet.email(), owner)
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.withStartDate(START_YEAR, START_MONTH, START_DATE)
      })
      .build()
    await spinup(contents)
  })

  it("Should return same date as provided", async () => {
    const guide = await database.selectGuide(GUIDE_ID)
    logJson(guide.id, "guide.id")
    expect(guide.title).toBe(GUIDE_TITLE)
    expect(guide.start_date!).toBe("2019-08-01")
  })

})
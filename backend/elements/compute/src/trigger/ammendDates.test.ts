import faker from "faker"
import { database, generateId, Guide } from "@guided/database"
import { spinup, UserBuilder } from "@guided/spinup"
import ammendDates from "./ammendDates"
import { prepare } from "../index"
import trigger from "./index"

const TIMEOUT = 30_000

describe("When adding a start date to guide with 3 spots", () => {

  const owner: string = faker.internet.userName()
  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  const START_DATE: string = "2020-01-01"
  const SPOT_ID_1: string = generateId("spot_1")
  const SPOT_ID_2: string = generateId("spot_2")
  const SPOT_ID_3: string = generateId("spot_3")
  let timestampBefore: number

  beforeAll(async () => {
    const contents = UserBuilder.create(faker.internet.email(), owner)
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.nextSpotLocation("Worthing", 1, SPOT_ID_1)
        builder.nextSpotLocation("Brighton", 3, SPOT_ID_2)
        builder.nextSpotLocation("Horsham", 2, SPOT_ID_3)
      })
      .build()

    await spinup(contents)

    const packet = await prepare(GUIDE_ID)
    await trigger(packet)

    await database.query("update guides set start_date=$1 where id=$2", [START_DATE, GUIDE_ID])
    const guide = await database.one<Guide>("select * from guides where id=$1", [GUIDE_ID])
    timestampBefore = new Date().getTime()

    await ammendDates(guide)

  }, TIMEOUT)

  it("should have correct date for guide", async () => {
    const guide = await database.one<Guide>("select * from guides where id=$1", [GUIDE_ID])
    expect(guide.start_date).toBe(START_DATE)
  })

  it("should update dates for 3 spots", async () => {
    const spots = await database.selectSpotsForGuide(GUIDE_ID)
    expect(spots.length).toBe(3)

    expect(spots[0].date).toBe("2019-12-31")
    expect(spots[0].updated.getTime()).toBeGreaterThan(timestampBefore)

    expect(spots[1].date).toBe("2020-01-01")
    expect(spots[1].updated.getTime()).toBeGreaterThan(timestampBefore)

    expect(spots[2].date).toBe("2020-01-04")
    expect(spots[2].updated.getTime()).toBeGreaterThan(timestampBefore)
  })

  it("should update dates for 3 rides", async () => {
    const rides = await database.selectRidesForGuide(GUIDE_ID)
    expect(rides.length).toBe(3)

    expect(rides[0].date).toBe("2020-01-01")
    expect(rides[0].updated.getTime()).toBeGreaterThan(timestampBefore)

    expect(rides[1].date).toBe("2020-01-04")
    expect(rides[1].updated.getTime()).toBeGreaterThan(timestampBefore)

    expect(rides[2].date).toBe("2020-01-06")
    expect(rides[2].updated.getTime()).toBeGreaterThan(timestampBefore)

  })
})

describe("When editing a start date to guide with 3 spots", () => {

  const owner: string = faker.internet.userName()
  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  const START_DATE: string = "2020-01-01"
  const SPOT_ID_1: string = generateId("spot_1")
  const SPOT_ID_2: string = generateId("spot_2")
  const SPOT_ID_3: string = generateId("spot_3")
  let timestampBefore: number

  beforeAll(async () => {
    const contents = UserBuilder.create(faker.internet.email(), owner)
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.withStartDate(2019, 6, 6)
        builder.nextSpotLocation("Worthing", 1, SPOT_ID_1)
        builder.nextSpotLocation("Brighton", 3, SPOT_ID_2)
        builder.nextSpotLocation("Horsham", 2, SPOT_ID_3)
      })
      .build()

    await spinup(contents)

    const packet = await prepare(GUIDE_ID)
    await trigger(packet)

    await database.query("update guides set start_date=$1 where id=$2", [START_DATE, GUIDE_ID])
    const guide = await database.one<Guide>("select * from guides where id=$1", [GUIDE_ID])
    timestampBefore = new Date().getTime()

    await ammendDates(guide)

  }, TIMEOUT)

  it("should have correct date for guide", async () => {
    const guide = await database.one<Guide>("select * from guides where id=$1", [GUIDE_ID])
    expect(guide.start_date).toBe(START_DATE)
  })

  it("should update dates for 3 spots", async () => {
    const spots = await database.selectSpotsForGuide(GUIDE_ID)
    expect(spots.length).toBe(3)

    expect(spots[0].date).toBe("2019-12-31")
    expect(spots[0].updated.getTime()).toBeGreaterThan(timestampBefore)

    expect(spots[1].date).toBe("2020-01-01")
    expect(spots[1].updated.getTime()).toBeGreaterThan(timestampBefore)

    expect(spots[2].date).toBe("2020-01-04")
    expect(spots[2].updated.getTime()).toBeGreaterThan(timestampBefore)
  })

  it("should update dates for 3 rides", async () => {
    const rides = await database.selectRidesForGuide(GUIDE_ID)
    expect(rides.length).toBe(3)

    expect(rides[0].date).toBe("2020-01-01")
    expect(rides[0].updated.getTime()).toBeGreaterThan(timestampBefore)

    expect(rides[1].date).toBe("2020-01-04")
    expect(rides[1].updated.getTime()).toBeGreaterThan(timestampBefore)

    expect(rides[2].date).toBe("2020-01-06")
    expect(rides[2].updated.getTime()).toBeGreaterThan(timestampBefore)

  })
})

describe("When removing a start date to guide with 3 spots", () => {

  const owner: string = faker.internet.userName()
  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  const SPOT_ID_1: string = generateId("spot_1")
  const SPOT_ID_2: string = generateId("spot_2")
  const SPOT_ID_3: string = generateId("spot_3")
  let timestampBefore: number

  beforeAll(async () => {
    const contents = UserBuilder.create(faker.internet.email(), owner)
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.withStartDate(2019, 6, 6)
        builder.nextSpotLocation("Worthing", 1, SPOT_ID_1)
        builder.nextSpotLocation("Brighton", 3, SPOT_ID_2)
        builder.nextSpotLocation("Horsham", 2, SPOT_ID_3)
      })
      .build()

    await spinup(contents)

    const packet = await prepare(GUIDE_ID)
    await trigger(packet)

    await database.query("update guides set start_date=null where id=$1", [GUIDE_ID])
    const guide = await database.one<Guide>("select * from guides where id=$1", [GUIDE_ID])
    timestampBefore = new Date().getTime()

    await ammendDates(guide)

  }, TIMEOUT)

  it("should have removed date for guide", async () => {
    const guide = await database.one<Guide>("select * from guides where id=$1", [GUIDE_ID])
    expect(guide.start_date).toBeNull()
  })

  it("should have remove dates for 3 spots", async () => {
    const spots = await database.selectSpotsForGuide(GUIDE_ID)
    expect(spots.length).toBe(3)

    expect(spots[0].date).toBeNull()
    expect(spots[0].updated.getTime()).toBeGreaterThan(timestampBefore)

    expect(spots[1].date).toBeNull()
    expect(spots[1].updated.getTime()).toBeGreaterThan(timestampBefore)

    expect(spots[2].date).toBeNull()
    expect(spots[2].updated.getTime()).toBeGreaterThan(timestampBefore)
  })

  it("should have removed dates for 3 rides", async () => {
    const rides = await database.selectRidesForGuide(GUIDE_ID)
    expect(rides.length).toBe(3)

    expect(rides[0].date).toBeNull()
    expect(rides[0].updated.getTime()).toBeGreaterThan(timestampBefore)

    expect(rides[1].date).toBeNull()
    expect(rides[1].updated.getTime()).toBeGreaterThan(timestampBefore)

    expect(rides[2].date).toBeNull()
    expect(rides[2].updated.getTime()).toBeGreaterThan(timestampBefore)

  })
})
import prep, { Packet } from "./index"
import faker from "faker"
import { Contents, spinup, UserBuilder } from "@guided/spinup"
import { database, generateId } from "@guided/database"

const TIMEOUT = 60000

describe("When first computing a guide with no spots", () => {

  let guideId: string
  const GUIDE_TITLE: string = faker.random.words(3)
  let packet: Packet

  const contents: Contents = UserBuilder.create()
    .addGuide(GUIDE_TITLE, (builder) => {
      guideId = builder.guideId
    })
    .build()

  beforeAll(async () => {
    await spinup(contents)
    const guide = await database.selectGuide(guideId)
    expect(guide.title).toBe(GUIDE_TITLE)
    packet = await prep(guideId)
  }, TIMEOUT)

  it("Returns no computations", async () => {
    expect(packet.computationIds.length).toBe(0)
  })

  it("Makes no alterations", async () => {
    expect(packet.alterations.alteredRides.length).toBe(0)
    expect(packet.alterations.alteredStages.length).toBe(0)
    expect(packet.alterations.alteredSpots.length).toBe(0)
  })
})

describe("When adding a spot to a guide with 0 spots", () => {

  let guideId: string
  const GUIDE_TITLE: string = faker.random.words(3)
  const SPOT_ID_1: string = generateId("spot_1")
  let packet: Packet
  let timestampBefore: number

  const contents: Contents = UserBuilder.create()
    .addGuide(GUIDE_TITLE, (builder) => {
      guideId = builder.guideId
      builder.nextSpotLocation("Worthing", 1, SPOT_ID_1, "Spot 1")
    })
    .build()

  beforeAll(async () => {
    await spinup(contents)
    const guide = await database.selectGuide(guideId)
    expect(guide.title).toBe(GUIDE_TITLE)
    timestampBefore = new Date().getTime()
    packet = await prep(guideId)
  }, TIMEOUT)

  it("Returns no stages to compute", async () => {
    expect(packet.computationIds.length).toBe(0)
  })

  it("Makes no ride alterations", async () => {
    expect(packet.alterations.alteredRides.length).toBe(0)
  })

  it("Makes no stages alterations", async () => {
    expect(packet.alterations.alteredStages.length).toBe(0)
  })

  it("Makes no spot alterations", async () => {
    expect(packet.alterations.alteredSpots.length).toBe(0)
  })
})
describe("When adding a spot to a guide with 1 spot", () => {

  let guideId: string
  const GUIDE_TITLE: string = faker.random.words(3)
  const SPOT_ID_1: string = generateId("spot_1")
  let packet: Packet

  const contents: Contents = UserBuilder.create()
    .addGuide(GUIDE_TITLE, (builder) => {
      guideId = builder.guideId
      builder.nextSpotLocation("Worthing", 1, SPOT_ID_1, "Spot 1")
    })
    .build()

  beforeAll(async () => {
    await spinup(contents)
    const guide = await database.selectGuide(guideId)
    expect(guide.title).toBe(GUIDE_TITLE)
    packet = await prep(guideId)
  }, TIMEOUT)

  it("Returns no stages to compute", async () => {
    expect(packet.computationIds.length).toBe(0)
  })

  it("Makes no alterations", async () => {
    expect(packet.alterations.alteredRides.length).toBe(0)
    expect(packet.alterations.alteredStages.length).toBe(0)
    expect(packet.alterations.alteredSpots.length).toBe(0)
  })
})
import prep, { PrepResult } from "./index"
import { logJson } from "@guided/logger"
import faker from "faker"
import { actions, Builder, Contents, spinup } from "@guided/spinup"
import { database, generateId } from "@guided/database"

const TIMEOUT = 60000

type LatLng = {
  lat: number
  long: number
}

const LATLNG: { [key in string]: LatLng } = {
  London: {
    lat: 51.5074,
    long: -0.1278,
  },
  Brighton: {
    lat: 50.8225,
    long: -0.1372,
  },
  Worthing: {
    lat: 50.8179,
    long: -0.3729,
  },
}

describe("When first computing a guide with no spots", () => {

  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  let prepResult: PrepResult

  const contents: Contents = Builder.create()
    .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
    })
    .build()

  beforeAll(async () => {
    await spinup(contents)
    const guide = await database.selectGuide(GUIDE_ID)
    expect(guide.title).toBe(GUIDE_TITLE)
    prepResult = await prep("guide_oq35hgz")
  }, TIMEOUT)

  it("Returns no stages to compute", async () => {
    expect(prepResult.stageIds).toBe(0)
  })

  it("Makes no alterations", async () => {
    expect(prepResult.stageIds).toBe(0)
    expect(prepResult.alterations.alteredRides.length).toBe(0)
    expect(prepResult.alterations.alteredStages.length).toBe(0)
    expect(prepResult.alterations.alteredSpots.length).toBe(0)
  })
})

describe("When adding a spot to a guide with 1 spot", () => {

  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  let prepResult: PrepResult

  const contents: Contents = Builder.create()
    .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
      // builder.nextSpotLocation('Worthing',)
    })
    .build()

  beforeAll(async () => {
    await spinup(contents)
    const guide = await database.selectGuide(GUIDE_ID)
    expect(guide.title).toBe(GUIDE_TITLE)
    prepResult = await prep("guide_oq35hgz")
  }, TIMEOUT)

  it("Returns no stages to compute", async () => {
    expect(prepResult.stageIds).toBe(0)
  })

  it("Makes no alterations", async () => {
    expect(prepResult.stageIds).toBe(0)
    expect(prepResult.alterations.alteredRides.length).toBe(0)
    expect(prepResult.alterations.alteredStages.length).toBe(0)
    expect(prepResult.alterations.alteredSpots.length).toBe(0)
  })
})
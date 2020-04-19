import { spinup, UserBuilder } from "@guided/spinup"
import faker from "faker"
import create from "./create"
import { database } from "@guided/database"
import { logJson } from "@guided/logger"
import { CreateGuideResult, TransportType } from "../../generated"

const USERNAME: string = faker.internet.userName()
const EMAIL: string = faker.internet.email()

beforeAll(async () => {
  const contents = UserBuilder.create(EMAIL, USERNAME)
    .build()

  await spinup(contents)
})


describe("When creating a guide", () => {

  const IS_CIRCULAR = true
  const TRANSPORT_TYPE: TransportType = TransportType.Motorcycle
  const MAX_HOURS_PER_RIDE = 7
  const TITLE = "Some title"

  let result: CreateGuideResult

  beforeAll(async () => {
    result = await create({
      type: TRANSPORT_TYPE,
      title: TITLE,
      maxHoursPerRide: MAX_HOURS_PER_RIDE,
      isCircular: IS_CIRCULAR,
    }, USERNAME)
    logJson(result, "result")
  })

  it("Should create a guide", async () => {
    const guide = await database.selectGuide(result.guideId!)
    expect(guide.title).toBe(TITLE)
    expect(guide.slug).toBe("some-title")
    expect(guide.updated).toBe(null)
    expect(guide.max_hours_per_ride).toBe(MAX_HOURS_PER_RIDE)
    expect(guide.transport_type).toBe(TRANSPORT_TYPE)
    expect(guide.created).toBeDefined()
    expect(guide.created.getTime()).toBeLessThan(new Date().getTime())
  })

  it("Should succeed", () => {
    expect(result.success).toBe(true)
    expect(result.message).toBeUndefined()
  })
})

describe("When creating a guide for a title that already exists", () => {

  const IS_CIRCULAR = true
  const TRANSPORT_TYPE: TransportType = TransportType.Motorcycle
  const MAX_HOURS_PER_RIDE = 7
  const TITLE = faker.random.words(3)

  let originalResult: CreateGuideResult
  let result: CreateGuideResult

  beforeAll(async () => {

    originalResult = await create({
      type: TRANSPORT_TYPE,
      title: TITLE,
      maxHoursPerRide: MAX_HOURS_PER_RIDE,
      isCircular: IS_CIRCULAR,
    }, USERNAME)

    if (!originalResult.success) {
      throw new Error(originalResult.message!)
    }

    result = await create({
      type: TRANSPORT_TYPE,
      title: TITLE,
      maxHoursPerRide: MAX_HOURS_PER_RIDE,
      isCircular: IS_CIRCULAR,
    }, USERNAME)
    logJson(result, "result")
  })

  it("Should not affect original guide", async () => {
    const guide = await database.selectGuide(originalResult.guideId!)
    expect(guide.title).toBe(TITLE)
    expect(guide.updated).toBe(null)
    expect(guide.max_hours_per_ride).toBe(MAX_HOURS_PER_RIDE)
    expect(guide.transport_type).toBe(TRANSPORT_TYPE)
    expect(guide.created).toBeDefined()
    expect(guide.created.getTime()).toBeLessThan(new Date().getTime())
    expect(guide.updated).toBeNull()
  })

  it("Should not create a guide", async () => {
    expect(result.guideId).toBeUndefined()
  })

  it("Should fail", () => {
    expect(result.success).toBe(false)
    expect(result.message).toBe(`Guide already exists called '${TITLE}'`)
  })
})
import { Packet, trigger } from "@guided/compute-stage"
import { Computation, database, generateId, Ride, Spot, Stage } from "@guided/database"
import { spinup, UserBuilder } from "@guided/spinup"
import faker from "faker"
import { prepare } from "./index"
import { MutationAddSpotFromLatLngArgs } from "../../generated"
import { LOCATIONS } from "@guided/spinup/srv/builder/GuideBuilder"
import { log, logJson } from "@guided/logger"
import exp from "constants"

const TIMEOUT = 30_000

describe("When adding a spot to a guide with 0 spots and a start date", () => {

  const owner: string = faker.internet.userName()
  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  const SPOT_ID_1: string = generateId("spot_1")
  const START_DATE = Date.UTC(2019, 8)
  let timestampBefore: number
  let packet: Packet

  beforeAll(async () => {

    const contents = UserBuilder.create(faker.internet.email(), owner)
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.withStartDate(new Date(START_DATE))
      })
      .build()
    await spinup(contents)
    const guide = await database.selectGuide(GUIDE_ID)
    expect(guide.title).toBe(GUIDE_TITLE)
    expect(guide.start_date).toBeDefined()
    expect(guide.start_date!.getTime()).toBe(START_DATE)
    timestampBefore = new Date().getTime()

    const args: MutationAddSpotFromLatLngArgs = {
      guideId: GUIDE_ID,
      long: LOCATIONS.Worthing.long,
      lat: LOCATIONS.Worthing.lat,
    }
    const result = await prepare(args, owner)
    packet = result.packet
    expect(result.packet).toBe(SPOT_ID_1)
  }, TIMEOUT)

  it("Prepare 0 computations to be executed ", () => {
    expect(packet.computationIds.length).toBe(0)
  })

  it("Have inserted a spot", async () => {
    const spot = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_1])

    expect(spot).toBeDefined()
    expect(spot.created).toBeDefined()
    expect(spot.created!.getTime()).toBeGreaterThan(timestampBefore)
    expect(spot.updated).toBeNull()
    expect(spot.position).toBe("0")
    expect(spot.date).toBeNull()
    expect(spot.locked).toBe(true)
    expect(spot.nights).toBe(1)
    expect(spot.location).toBeDefined()
    expect(spot.country).toBeDefined()
    expect(spot.lat).toBe(LOCATIONS.Worthing.lat)
    expect(spot.long).toBe(LOCATIONS.Worthing.long)

  })

  it("Alter zero rides", () => {
    expect(packet.alterations.alteredRides.length).toBe(0)
  })

  it("Alter zero stages", () => {
    expect(packet.alterations.alteredStages.length).toBe(0)
  })

  it("Alter zero spots", async () => {
    expect(packet.alterations.alteredSpots.length).toBe(0)
  })
})
describe("When adding a spot to a guide with 1 spot", () => {

  const owner: string = faker.internet.userName()
  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  const SPOT_ID_1: string = generateId("spot_1")
  let spot2Id: string
  let timestampBefore: number
  let packet: Packet

  beforeAll(async () => {

    const contents = UserBuilder.create(faker.internet.email(), owner)
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.nextSpotLocation("Worthing", 1, SPOT_ID_1)
      })
      .build()

    await spinup(contents)
    const guide = await database.selectGuide(GUIDE_ID)
    expect(guide.title).toBe(GUIDE_TITLE)
    timestampBefore = new Date().getTime()

    const args: MutationAddSpotFromLatLngArgs = {
      guideId: GUIDE_ID,
      long: LOCATIONS.Brighton.long,
      lat: LOCATIONS.Brighton.lat,
    }
    const result = await prepare(args, owner)
    packet = result.packet
    spot2Id = result.spotId
  }, TIMEOUT)


  it("Have inserted a spot", async () => {
    const spot = await database.one<Spot>("select * from spots where id=$1", [spot2Id])
    expect(spot).toBeDefined()
    expect(spot.created).toBeDefined()
    expect(spot.created!.getTime()).toBeGreaterThan(timestampBefore)
    expect(spot.updated).toBeNull()
    expect(spot.position).toBe("1")
    expect(spot.date).toBeNull()
    expect(spot.locked).toBe(true)
    expect(spot.nights).toBe(1)
    expect(spot.location).toBeDefined()
    expect(spot.country).toBeDefined()
    expect(spot.lat).toBe(LOCATIONS.Worthing.lat)
    expect(spot.long).toBe(LOCATIONS.Worthing.long)
  })

  it("Schedule 2 computations to be executed ", async () => {
    expect(packet.computationIds.length).toBe(2)
    const computations = await database.manyOrNone<Computation>("select * from computations where guide=$1", GUIDE_ID)
    expect(computations.length).toBe(2)
    expect(computations[0].status).toBe("scheduled")
    expect(computations[1].status).toBe("scheduled")
  })

  it("Create 2 stages in 'computing' stage", async () => {
    const stages = await database.manyOrNone<Stage>("select * from stages where guide=$1", GUIDE_ID)
    expect(stages.length).toBe(2)

    log(`stages[0].id=${stages[0].id}`)
    expect(stages[0].status).toBe("computing")
    expect(stages[0].from_spot).toBe(SPOT_ID_1)
    expect(stages[0].to_spot).toBe(spot2Id)

    log(`stages[1].id=${stages[1].id}`)
    expect(stages[1].status).toBe("computing")
    expect(stages[1].from_spot).toBe(spot2Id)
    expect(stages[1].to_spot).toBe(SPOT_ID_1)
  })

  it("Alter zero rides", () => {
    expect(packet.alterations.alteredRides.length).toBe(0)
  })

  it("Alter zero stages", () => {
    expect(packet.alterations.alteredStages.length).toBe(0)
  })

  it("Alter zero spots", async () => {
    expect(packet.alterations.alteredSpots.length).toBe(0)
  })

  it("Spot positions should be in order", async () => {
    const spots = await database.many<Spot>("select * from spots where guide=$1", [GUIDE_ID])
    expect(spots[0].position).toBe("0")
    expect(spots[1].position).toBe("1")
  })

  describe("After execution", () => {

    beforeAll(async () => {
      await trigger(packet)
    }, TIMEOUT)

    it("Should have marked 2 computations as 'complete'", async () => {
      const computations = await database.manyOrNone<Computation>("select * from computations where guide=$1", [GUIDE_ID])
      expect(computations.length).toBe(2)

      expect(computations[0].status).toBe("success")
      expect(computations[0].duration).toBeGreaterThan(0)
      expect(computations[0].created).toBeDefined()
      expect(computations[0].ended).toBeDefined()

      expect(computations[1].status).toBe("success")
      expect(computations[1].duration).toBeGreaterThan(0)
      expect(computations[1].created).toBeDefined()
      expect(computations[1].ended).toBeDefined()
    })

    it("Should have updated 2 stages as 'ready'", async () => {
      const stages = await database.manyOrNone<Stage>("select * from stages where guide=$1", [GUIDE_ID])
      expect(stages.length).toBe(2)

      expect(stages[0].status).toBe("ready")
      expect(stages[0].updated).toBeDefined()
      expect(stages[0].updated!.getTime()).toBeGreaterThan(timestampBefore)

      expect(stages[1].status).toBe("ready")
      expect(stages[1].updated).toBeDefined()
      expect(stages[1].updated!.getTime()).toBeGreaterThan(timestampBefore)
    })

    it("Should have created 2 rides as 'ready'", async () => {
      const rides = await database.manyOrNone<Ride>("select * from rides where guide=$1", [GUIDE_ID])
      expect(rides.length).toBe(2)

      expect(rides[0].status).toBe("ready")
      expect(rides[0].path_url).toBeDefined()
      expect(rides[0].duration_seconds).toBeGreaterThan(0)
      expect(rides[0].distance_meters).toBeGreaterThan(0)
      expect(rides[0].date).toBeNull()

      expect(rides[1].status).toBe("ready")
      expect(rides[1].path_url).toBeDefined()
      expect(rides[1].duration_seconds).toBeGreaterThan(0)
      expect(rides[1].distance_meters).toBeGreaterThan(0)
      expect(rides[1].date).toBeNull()
    })

  })

})

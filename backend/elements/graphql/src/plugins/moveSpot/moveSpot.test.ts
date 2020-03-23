import faker from "faker"
import { Computation, database, generateId, Ride, Spot, Stage } from "@guided/database"
import { Packet, trigger } from "@guided/compute"
import * as compute from "@guided/compute"
import { spinup, UserBuilder } from "@guided/spinup"
import { LOCATIONS } from "@guided/spinup/srv/builder/GuideBuilder"
import { MutationMoveSpotArgs } from "../../generated"
import { prepare } from "./index"
import { log, logJson } from "@guided/logger"


const TIMEOUT = 60_000

describe("When moving a spot on a guide with 1 spot", () => {

  const owner: string = faker.internet.userName()
  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  const START_YEAR: number = 2019
  const START_MONTH: number = 8
  const START_DATE: number = 1
  const SPOT_ID: string = generateId("spot")
  let timestampBefore: number
  let packet: Packet
  let newId: string

  beforeAll(async () => {

    const contents = UserBuilder.create(faker.internet.email(), owner)
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.withStartDate(START_YEAR, START_MONTH, START_DATE)
        builder.nextSpot(LOCATIONS.London.lat, LOCATIONS.London.long, 1, undefined, SPOT_ID)
      })
      .build()
    await spinup(contents)
    const initialPacket = await compute.prepare(GUIDE_ID)
    await compute.trigger(initialPacket)

    const guide = await database.selectGuide(GUIDE_ID)
    expect(guide.title).toBe(GUIDE_TITLE)
    expect(guide.start_date).toBe("2019-08-01")
    const spots = await database.selectSpotsForGuide(GUIDE_ID)
    expect(spots.length).toBe(1)
    expect(spots[0].id).toBe(SPOT_ID)

    timestampBefore = new Date().getTime()
    const args: MutationMoveSpotArgs = {
      spotId: SPOT_ID,
      long: LOCATIONS.Brighton.long,
      lat: LOCATIONS.Brighton.lat,
    }
    const result = await prepare(args)
    packet = result.packet
    newId = result.newId

  }, TIMEOUT)

  it("Prepares 0 computations to be executed", () => {
    expect(packet.computationIds.length).toBe(0)
  })

  it("Updated a spots ID", async () => {
    expect(newId).toBeDefined()
    expect(SPOT_ID).toBeDefined()
    expect(newId).not.toBe(SPOT_ID)

    const forOldSpotId = await database.manyOrNone<Spot>("select * from spots where id=$1", [SPOT_ID])
    expect(forOldSpotId.length).toBe(0)

    const forNewSpotId = await database.manyOrNone<Spot>("select * from spots where id=$1", [newId])
    expect(forNewSpotId.length).toBe(1)
  })

  it("Updated a spot", async () => {
    const spot = await database.one<Spot>("select * from spots where id=$1", [newId])

    expect(spot).toBeDefined()
    expect(spot.created).toBeDefined()
    expect(spot.created!.getTime()).toBeLessThan(timestampBefore)
    expect(spot.updated).toBeDefined()
    expect(spot.updated!.getTime()).toBeGreaterThan(timestampBefore)
    expect(spot.position).toBe("0")
    expect(spot.date).toBeNull()
    expect(spot.locked).toBe(true)
    expect(spot.nights).toBe(1)
    expect(spot.location).toBe("Brighton")
    expect(spot.country).toBe("GB")
    expect(spot.lat).toBe(LOCATIONS.Brighton.lat)
    expect(spot.long).toBe(LOCATIONS.Brighton.long)
  })

})

describe("When moving a spot on a guide with 2 spots", () => {

  const owner: string = faker.internet.userName()
  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  const START_YEAR: number = 2019
  const START_MONTH: number = 8
  const START_DATE: number = 1
  const SPOT_ID_1: string = generateId("spot")
  const SPOT_ID_2: string = generateId("spot")
  let dateBefore: Date
  let timestampBefore: number
  let packet: Packet
  let newId: string

  beforeAll(async () => {

    const contents = UserBuilder.create(faker.internet.email(), owner)
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.withStartDate(START_YEAR, START_MONTH, START_DATE)
        builder.nextSpot(LOCATIONS.London.lat, LOCATIONS.London.long, 1, undefined, SPOT_ID_1)
        builder.nextSpot(LOCATIONS.Brighton.lat, LOCATIONS.Brighton.long, 1, undefined, SPOT_ID_2)
      })
      .build()
    await spinup(contents)

    const initialPacket = await compute.prepare(GUIDE_ID)
    await compute.trigger(initialPacket)

    const guide = await database.selectGuide(GUIDE_ID)
    expect(guide.title).toBe(GUIDE_TITLE)
    expect(guide.start_date).toBe("2019-08-01")
    const spots = await database.selectSpotsForGuide(GUIDE_ID)
    expect(spots.length).toBe(2)
    const rides = await database.selectRidesForGuide(GUIDE_ID)
    expect(rides.length).toBe(2)
    const stages = await database.selectStagesForGuide(GUIDE_ID)
    expect(stages.length).toBe(2)

    dateBefore = new Date()
    timestampBefore = dateBefore.getTime()
    const args: MutationMoveSpotArgs = {
      spotId: SPOT_ID_2,
      long: LOCATIONS.Worthing.long,
      lat: LOCATIONS.Worthing.lat,
    }
    const result = await prepare(args)
    packet = result.packet
    newId = result.newId

  }, TIMEOUT)

  it("Prepares 2 computations to be executed", () => {
    expect(packet.computationIds.length).toBe(2)
  })

  it("Updated a spots ID", async () => {
    expect(newId).toBeDefined()
    expect(newId).not.toBe(SPOT_ID_2)

    const forOldSpotId = await database.manyOrNone<Spot>("select * from spots where id=$1", [SPOT_ID_2])
    expect(forOldSpotId.length).toBe(0)

    const forNewSpotId = await database.manyOrNone<Spot>("select * from spots where id=$1", [newId])
    expect(forNewSpotId.length).toBe(1)
  })

  it("Updated a spot", async () => {
    const spot = await database.one<Spot>("select * from spots where id=$1", [newId])

    expect(spot).toBeDefined()
    expect(spot.created).toBeDefined()
    expect(spot.created!.getTime()).toBeLessThan(timestampBefore)
    expect(spot.updated).toBeDefined()
    expect(spot.updated!.getTime()).toBeGreaterThan(timestampBefore)
    expect(spot.position).toBe("1")
    expect(spot.date).toBe("2019-08-01")
    expect(spot.locked).toBe(true)
    expect(spot.nights).toBe(1)
    expect(spot.location).toBe("Worthing")
    expect(spot.country).toBe("GB")
    expect(spot.lat).toBe(LOCATIONS.Worthing.lat)
    expect(spot.long).toBe(LOCATIONS.Worthing.long)
  })


  it("Create 2 stages in 'computing' stage", async () => {
    const stages = await database.manyOrNone<Stage>("select stages.* from stages inner join spots on stages.from_spot=spots.id where stages.guide=$1 order by spots.position", GUIDE_ID)
    expect(stages.length).toBe(2)

    log(`stages[0].id=${stages[0].id}`)
    expect(stages[0].status).toBe("computing")
    expect(stages[0].from_spot).toBe(SPOT_ID_1)
    expect(stages[0].to_spot).toBe(newId)

    log(`stages[1].id=${stages[1].id}`)
    expect(stages[1].status).toBe("computing")
    expect(stages[1].from_spot).toBe(newId)
    expect(stages[1].to_spot).toBe(SPOT_ID_1)
  })

  it("Schedule 2 computations to be executed ", async () => {
    expect(packet.computationIds.length).toBe(2)
    const computations = await database.manyOrNone<Computation>("select * from computations where guide=$1 and created>$2", [GUIDE_ID, dateBefore])
    expect(computations.length).toBe(2)

    expect(computations[0].status).toBe("scheduled")
    expect(computations[0].created).toBeDefined()
    expect(computations[0].ended).toBeNull()
    expect(computations[0].duration).toBeNull()

    expect(computations[1].status).toBe("scheduled")
    expect(computations[1].created).toBeDefined()
    expect(computations[1].ended).toBeNull()
    expect(computations[1].duration).toBeNull()

  })


  describe("After first execution", () => {

    beforeAll(async () => {
      await trigger(packet)
    }, TIMEOUT)

    it("marked 2 computations as complete", async () => {
      const computations = await database.manyOrNone<Computation>("select * from computations where guide=$1 and created>$2", [GUIDE_ID, dateBefore])
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
      const rides = await database.selectRidesForGuide(GUIDE_ID)
      expect(rides.length).toBe(2)

      expect(rides[0].status).toBe("ready")
      expect(rides[0].path_url).toBeDefined()
      expect(rides[0].duration_seconds).toBeGreaterThan(0)
      expect(rides[0].distance_meters).toBeGreaterThan(0)
      expect(rides[0].date).toBe("2019-08-01")

      expect(rides[1].status).toBe("ready")
      expect(rides[1].path_url).toBeDefined()
      expect(rides[1].duration_seconds).toBeGreaterThan(0)
      expect(rides[1].distance_meters).toBeGreaterThan(0)
      expect(rides[1].date).toBe("2019-08-02")
    })

  })

})

describe("When moving a spot on a guide with 3 spots", () => {

  const owner: string = faker.internet.userName()
  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  const START_YEAR: number = 2019
  const START_MONTH: number = 8
  const START_DATE: number = 1
  const SPOT_ID_1: string = generateId("spot")
  const SPOT_ID_2: string = generateId("spot")
  const SPOT_ID_3: string = generateId("spot")
  let timestampBefore: number
  let dateBefore: Date
  let packet: Packet
  let newId: string

  beforeAll(async () => {

    const contents = UserBuilder.create(faker.internet.email(), owner)
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.withStartDate(START_YEAR, START_MONTH, START_DATE)
        builder.nextSpot(LOCATIONS.London.lat, LOCATIONS.London.long, 1, undefined, SPOT_ID_1)
        builder.nextSpot(LOCATIONS.Brighton.lat, LOCATIONS.Brighton.long, 1, undefined, SPOT_ID_2)
        builder.nextSpot(LOCATIONS.Worthing.lat, LOCATIONS.Worthing.long, 1, undefined, SPOT_ID_3)
      })
      .build()
    await spinup(contents)

    const initialPacket = await compute.prepare(GUIDE_ID)
    logJson(initialPacket, "initialPacket")
    await compute.trigger(initialPacket)

    const guide = await database.selectGuide(GUIDE_ID)
    expect(guide.title).toBe(GUIDE_TITLE)
    expect(guide.start_date).toBe("2019-08-01")
    const spots = await database.selectSpotsForGuide(GUIDE_ID)
    expect(spots.length).toBe(3)
    const stages = await database.selectStagesForGuide(GUIDE_ID)
    expect(stages.length).toBe(3)
    const rides = await database.selectRidesForGuide(GUIDE_ID)
    expect(rides.length).toBe(3)

    dateBefore = new Date()
    timestampBefore = dateBefore.getTime()
    const args: MutationMoveSpotArgs = {
      spotId: SPOT_ID_3,
      long: LOCATIONS.Horsham.long,
      lat: LOCATIONS.Horsham.lat,
    }
    const result = await prepare(args)
    packet = result.packet
    newId = result.newId

  }, TIMEOUT)

  it("Prepares 2 computations to be executed", () => {
    expect(packet.computationIds.length).toBe(2)
  })

  it("Updated a spots ID", async () => {
    expect(newId).toBeDefined()
    expect(newId).not.toBe(SPOT_ID_3)

    const forOldSpotId = await database.manyOrNone<Spot>("select * from spots where id=$1", [SPOT_ID_3])
    expect(forOldSpotId.length).toBe(0)

    const forNewSpotId = await database.manyOrNone<Spot>("select * from spots where id=$1", [newId])
    expect(forNewSpotId.length).toBe(1)
  })

  it("Updated a spot", async () => {
    const spot = await database.one<Spot>("select * from spots where id=$1", [newId])

    expect(spot).toBeDefined()
    expect(spot.created).toBeDefined()
    expect(spot.created!.getTime()).toBeLessThan(timestampBefore)
    expect(spot.updated).toBeDefined()
    expect(spot.updated!.getTime()).toBeGreaterThan(timestampBefore)
    expect(spot.position).toBe("2")
    expect(spot.date).toBe("2019-08-02")
    expect(spot.locked).toBe(true)
    expect(spot.nights).toBe(1)
    expect(spot.location).toBe("Horsham")
    expect(spot.country).toBe("GB")
    expect(spot.lat).toBe(LOCATIONS.Horsham.lat)
    expect(spot.long).toBe(LOCATIONS.Horsham.long)
  })


  it("Create 2 stages in 'computing' stage and 1 in 'ready'", async () => {
    const stages = await database.selectStagesForGuide(GUIDE_ID)
    expect(stages.length).toBe(3)

    expect(stages[0].status).toBe("ready")
    expect(stages[0].from_spot).toBe(SPOT_ID_1)
    expect(stages[0].to_spot).toBe(SPOT_ID_2)

    expect(stages[1].status).toBe("computing")
    expect(stages[1].from_spot).toBe(SPOT_ID_2)
    expect(stages[1].to_spot).toBe(newId)

    expect(stages[2].status).toBe("computing")
    expect(stages[2].from_spot).toBe(newId)
    expect(stages[2].to_spot).toBe(SPOT_ID_1)
  })

  it("Schedule 2 computations to be executed ", async () => {
    expect(packet.computationIds.length).toBe(2)
    const computations = await database.manyOrNone<Computation>("select * from computations where guide=$1 and created>$2", [GUIDE_ID, dateBefore])
    expect(computations.length).toBe(2)

    expect(computations[0].status).toBe("scheduled")
    expect(computations[0].created).toBeDefined()
    expect(computations[0].ended).toBeNull()
    expect(computations[0].ended).toBeNull()
    expect(computations[0].duration).toBeNull()

    expect(computations[1].status).toBe("scheduled")
    expect(computations[1].created).toBeDefined()
    expect(computations[1].ended).toBeNull()
    expect(computations[1].ended).toBeNull()
    expect(computations[1].duration).toBeNull()

  })


  describe("After first execution", () => {

    beforeAll(async () => {
      await trigger(packet)
    }, TIMEOUT)

    it("marked all computations as success", async () => {
      const computations = await database.manyOrNone<Computation>("select * from computations where guide=$1 and status!='success'", [GUIDE_ID])
      expect(computations.length).toBe(0)
    })


    it("Should have 3 stages as 'ready'", async () => {
      const stages = await database.selectStagesForGuide(GUIDE_ID)
      expect(stages.length).toBe(3)

      expect(stages[0].status).toBe("ready")
      expect(stages[0].updated).toBeDefined()
      expect(stages[0].updated!.getTime()).toBeLessThan(timestampBefore)

      expect(stages[1].status).toBe("ready")
      expect(stages[1].updated).toBeDefined()
      expect(stages[1].updated!.getTime()).toBeGreaterThan(timestampBefore)

      expect(stages[2].status).toBe("ready")
      expect(stages[2].updated).toBeDefined()
      expect(stages[2].updated!.getTime()).toBeGreaterThan(timestampBefore)
    })

    it("Should have 3 rides as 'ready'", async () => {
      const rides = await database.selectRidesForGuide(GUIDE_ID)
      expect(rides.length).toBe(3)

      expect(rides[0].status).toBe("ready")
      expect(rides[0].path_url).toBeDefined()
      expect(rides[0].duration_seconds).toBeGreaterThan(0)
      expect(rides[0].distance_meters).toBeGreaterThan(0)
      expect(rides[0].date).toBe("2019-08-01")

      expect(rides[1].status).toBe("ready")
      expect(rides[1].path_url).toBeDefined()
      expect(rides[1].duration_seconds).toBeGreaterThan(0)
      expect(rides[1].distance_meters).toBeGreaterThan(0)
      expect(rides[1].date).toBe("2019-08-02")

      expect(rides[2].status).toBe("ready")
      expect(rides[2].path_url).toBeDefined()
      expect(rides[2].duration_seconds).toBeGreaterThan(0)
      expect(rides[2].distance_meters).toBeGreaterThan(0)
      expect(rides[2].date).toBe("2019-08-03")
    })

  })

})
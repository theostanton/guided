import { Packet, trigger } from "@guided/compute"
import { Computation, database, generateId, Ride, Spot, Stage } from "@guided/database"
import { spinup, UserBuilder } from "@guided/spinup"
import faker from "faker"
import { prepare } from "./index"
import { MutationAddSpotFromLatLngArgs } from "../../generated"
import { log, logJson } from "@guided/logger"
import { LOCATIONS } from "@guided/spinup/srv/builder/GuideBuilder"

const TIMEOUT = 30_000

describe("When adding a spot to a guide with 0 spots and a start date", () => {

  const owner: string = faker.internet.userName()
  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  const START_YEAR: number = 2019
  const START_MONTH: number = 8
  const START_DATE: number = 1
  let spotId: string
  let timestampBefore: number
  let packet: Packet

  beforeAll(async () => {

    const contents = UserBuilder.create(faker.internet.email(), owner)
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.withStartDate(START_YEAR, START_MONTH, START_DATE)
      })
      .build()
    await spinup(contents)
    const guide = await database.selectGuide(GUIDE_ID)
    expect(guide.title).toBe(GUIDE_TITLE)
    expect(guide.start_date).toBe("2019-08-01")
    timestampBefore = new Date().getTime()

    const args: MutationAddSpotFromLatLngArgs = {
      guideId: GUIDE_ID,
      long: LOCATIONS.Worthing.long,
      lat: LOCATIONS.Worthing.lat,
      nights: 2,
    }
    const result = await prepare(args, owner)
    packet = result.packet
    spotId = result.spotId
  }, TIMEOUT)

  it("Prepares 0 computations to be executed ", () => {
    expect(packet.computationIds.length).toBe(0)
  })

  it("Inserted a spot", async () => {
    const spot = await database.one<Spot>("select * from spots where id=$1", [spotId])

    expect(spot).toBeDefined()
    expect(spot.created).toBeDefined()
    expect(spot.created!.getTime()).toBeGreaterThan(timestampBefore)
    expect(spot.updated).toBeNull()
    expect(spot.position).toBe("0.0")
    expect(spot.date).toBeNull()
    expect(spot.locked).toBe(true)
    expect(spot.nights).toBe(2)
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

describe("When adding a spot to a guide with 1 spot and a start date", () => {

  const owner: string = faker.internet.userName()
  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)
  const SPOT_ID_1: string = generateId("spot_1")
  const START_YEAR: number = 2019
  const START_MONTH: number = 8
  const START_DATE: number = 1
  let spot2Id: string
  let timestampBefore: number
  let packet: Packet

  beforeAll(async () => {
    const contents = UserBuilder.create(faker.internet.email(), owner)
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.withStartDate(START_YEAR, START_MONTH, START_DATE)
        builder.nextSpotLocation("Worthing", 1, SPOT_ID_1)
      })
      .build()

    await spinup(contents)

    const guide = await database.selectGuide(GUIDE_ID)
    expect(guide.title).toBe(GUIDE_TITLE)
    logJson(guide.start_date, "guide.start_date")
    expect(guide.start_date).toBe("2019-08-01")
    timestampBefore = new Date().getTime()

    const spots = await database.selectSpotsForGuide(GUIDE_ID)
    expect(spots.length).toBe(1)
    expect(spots[0].id).toBe(SPOT_ID_1)

    const args: MutationAddSpotFromLatLngArgs = {
      guideId: GUIDE_ID,
      long: LOCATIONS.Brighton.long,
      lat: LOCATIONS.Brighton.lat,
      nights: 2,
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
    expect(spot.position).toBe("1.0")
    expect(spot.date).toBeNull()
    expect(spot.locked).toBe(true)
    expect(spot.nights).toBe(2)
    expect(spot.location).toBeDefined()
    expect(spot.country).toBeDefined()
    expect(spot.lat).toBe(LOCATIONS.Brighton.lat)
    expect(spot.long).toBe(LOCATIONS.Brighton.long)
  })

  it("Schedule 2 computations to be executed ", async () => {
    expect(packet.computationIds.length).toBe(2)
    const computations = await database.manyOrNone<Computation>("select * from computations where guide=$1", GUIDE_ID)
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

  it("Create 2 stages in 'computing' stage", async () => {
    const stages = await database.selectStagesForGuide(GUIDE_ID)
    expect(stages.length).toBe(2)

    log(`stages[0].id=${stages[0].id}`)
    expect(stages[0].status).toBe("computing")
    expect(stages[0].from_spot).toBe(SPOT_ID_1)
    expect(stages[0].to_spot).toBe(spot2Id)
    expect(stages[0].position).toBe(0)

    log(`stages[1].id=${stages[1].id}`)
    expect(stages[1].status).toBe("computing")
    expect(stages[1].from_spot).toBe(spot2Id)
    expect(stages[1].to_spot).toBe(SPOT_ID_1)
    expect(stages[1].position).toBe(1)
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
    const spot1 = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_1])
    expect(spot1.position).toBe("0.0")

    const spot2 = await database.one<Spot>("select * from spots where id=$1", [spot2Id])
    expect(spot2.position).toBe("1.0")
  })

  describe("After first execution", () => {

    beforeAll(async () => {
      await trigger(packet)
    }, TIMEOUT)

    it("Should have marked 2 computations as 'success'", async () => {
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
      const stages = await database.selectStagesForGuide(GUIDE_ID)
      expect(stages.length).toBe(2)

      expect(stages[0].status).toBe("ready")
      expect(stages[0].updated).toBeDefined()
      expect(stages[0].updated!.getTime()).toBeGreaterThan(timestampBefore)
      expect(stages[0].position).toBe(0)

      expect(stages[1].status).toBe("ready")
      expect(stages[1].updated).toBeDefined()
      expect(stages[1].updated!.getTime()).toBeGreaterThan(timestampBefore)
      expect(stages[1].position).toBe(1)
    })

    it("Should have created 2 rides as 'ready'", async () => {
      const rides = await database.selectRidesForGuide(GUIDE_ID)
      expect(rides.length).toBe(2)

      expect(rides[0].status).toBe("ready")
      expect(rides[0].path_url).toBeDefined()
      expect(rides[0].duration_seconds).toBeGreaterThan(0)
      expect(rides[0].distance_meters).toBeGreaterThan(0)
      expect(rides[0].date).toBe("2019-08-01")
      expect(rides[0].position).toBe("0.0")

      expect(rides[1].status).toBe("ready")
      expect(rides[1].path_url).toBeDefined()
      expect(rides[1].duration_seconds).toBeGreaterThan(0)
      expect(rides[1].distance_meters).toBeGreaterThan(0)
      expect(rides[1].date).toBe("2019-08-03")
      expect(rides[1].position).toBe("1.0")
    })

    it("Should have updated 2 spots'", async () => {
      const spots = await database.selectSpotsForGuide(GUIDE_ID)
      expect(spots.length).toBe(2)

      const spot1 = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_1])
      expect(spot1.date).toBe("2019-07-31")
      expect(spot1.position).toBe("0.0")
      expect(spot1.created).toBeDefined()
      expect(spot1.updated).toBeDefined()
      expect(spot1.country).toBeDefined()
      expect(spot1.location).toBeDefined()
      expect(spot1.locked).toBe(true)
      expect(spot1.lat).toBe(LOCATIONS.Worthing.lat)
      expect(spot1.long).toBe(LOCATIONS.Worthing.long)

      const spot2 = await database.one<Spot>("select * from spots where id=$1", [spot2Id])
      expect(spot2.date).toBe("2019-08-01")
      expect(spot2.position).toBe("1.0")
      expect(spot2.created).toBeDefined()
      expect(spot2.updated).toBeDefined()
      expect(spot2.country).toBeDefined()
      expect(spot2.location).toBeDefined()
      expect(spot2.locked).toBe(true)
      expect(spot2.lat).toBe(LOCATIONS.Brighton.lat)
      expect(spot2.long).toBe(LOCATIONS.Brighton.long)
    })

    describe("Then adding a third spot", () => {

      let spot3Id: string
      let secondPacket: Packet

      beforeAll(async () => {

        const args: MutationAddSpotFromLatLngArgs = {
          guideId: GUIDE_ID,
          long: LOCATIONS.London.long,
          lat: LOCATIONS.London.lat,
          nights: 5,
        }
        const result = await prepare(args, owner)
        secondPacket = result.packet
        spot3Id = result.spotId
      })


      it("Have inserted a spot", async () => {
        const spot = await database.one<Spot>("select * from spots where id=$1", [spot3Id])
        expect(spot).toBeDefined()
        expect(spot.created).toBeDefined()
        expect(spot.created!.getTime()).toBeGreaterThan(timestampBefore)
        expect(spot.updated).toBeNull()
        expect(spot.position).toBe("2.0")
        expect(spot.date).toBeNull()
        expect(spot.locked).toBe(true)
        expect(spot.nights).toBe(5)
        expect(spot.location).toBeDefined()
        expect(spot.country).toBeDefined()
        expect(spot.lat).toBe(LOCATIONS.London.lat)
        expect(spot.long).toBe(LOCATIONS.London.long)
      })

      it("Schedule 2 computations to be executed ", async () => {
        expect(packet.computationIds.length).toBe(2)
        const computations = await database.manyOrNone<Computation>("select * from computations where guide=$1 and status='scheduled'", GUIDE_ID)
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

      it("Create 2 stages in 'computing' stage", async () => {
        const query = "select stages.* from stages inner join spots on stages.from_spot=spots.id where stages.guide=$1 and status='computing' order by spots.position"
        const stages = await database.manyOrNone<Stage>(query, GUIDE_ID)
        expect(stages.length).toBe(2)

        expect(stages[0].status).toBe("computing")
        expect(stages[0].from_spot).toBe(spot2Id)
        expect(stages[0].to_spot).toBe(spot3Id)
        expect(stages[0].position).toBe(1)

        expect(stages[1].status).toBe("computing")
        expect(stages[1].from_spot).toBe(spot3Id)
        expect(stages[1].to_spot).toBe(SPOT_ID_1)
        expect(stages[1].position).toBe(2)
      })

      it("Should have delete 1 stage from spot2 to spot1", async () => {
        expect(secondPacket.alterations.alteredStages.length).toBe(1)
        const stages = await database.manyOrNone<Stage>("select * from stages where from_spot=$1 and to_spot=$1", [spot2Id, SPOT_ID_1])
        expect(stages.length).toBe(0)
      })

      it("Should have deleted 1 ride from spot2 to spot1", async () => {
        expect(secondPacket.alterations.alteredRides.length).toBe(1)
        const rides = await database.manyOrNone<Stage>("select * from rides where from_spot=$1 and to_spot=$1", [spot2Id, SPOT_ID_1])
        expect(rides.length).toBe(0)
      })

      it("Alter zero spots", async () => {
        expect(packet.alterations.alteredSpots.length).toBe(0)
      })

      it("Spot positions should be in order", async () => {
        const spot1 = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_1])
        expect(spot1.position).toBe("0.0")

        const spot2 = await database.one<Spot>("select * from spots where id=$1", [spot2Id])
        expect(spot2.position).toBe("1.0")

        const spot3 = await database.one<Spot>("select * from spots where id=$1", [spot3Id])
        expect(spot3.position).toBe("2.0")
      })


      describe("After second execution", () => {

        beforeAll(async () => {
          await trigger(secondPacket)
        }, TIMEOUT)


        it("Should have marked a total of 4 computations as 'complete'", async () => {
          const computations = await database.manyOrNone<Computation>("select * from computations where guide=$1", [GUIDE_ID])
          expect(computations.length).toBe(4)

          computations.forEach(computation => {
            expect(computation.status).toBe("success")
            expect(computation.duration).toBeGreaterThan(0)
            expect(computation.created).toBeDefined()
            expect(computation.ended).toBeDefined()
          })
        })

        it("Should have a total of 3 stages as 'ready'", async () => {
          const stages = await database.manyOrNone<Stage>("select * from stages where guide=$1", [GUIDE_ID])
          expect(stages.length).toBe(3)

          stages.forEach(stage => {
            expect(stage.status).toBe("ready")
            expect(stage.updated).toBeDefined()
          })
        })

        it("Should have a total of 3 rides as 'ready'", async () => {
          const rides = await database.selectRidesForGuide(GUIDE_ID)
          expect(rides.length).toBe(3)

          expect(rides[0].status).toBe("ready")
          expect(rides[0].path_url).toBeDefined()
          expect(rides[0].duration_seconds).toBeGreaterThan(0)
          expect(rides[0].distance_meters).toBeGreaterThan(0)
          expect(rides[0].from_spot).toBe(SPOT_ID_1)
          expect(rides[0].to_spot).toBe(spot2Id)
          expect(rides[0].date).toBe("2019-08-01")
          expect(rides[0].position).toBe("0.0")

          expect(rides[1].status).toBe("ready")
          expect(rides[1].path_url).toBeDefined()
          expect(rides[1].duration_seconds).toBeGreaterThan(0)
          expect(rides[1].distance_meters).toBeGreaterThan(0)
          expect(rides[1].from_spot).toBe(spot2Id)
          expect(rides[1].to_spot).toBe(spot3Id)
          expect(rides[1].date).toBe("2019-08-03")
          expect(rides[1].position).toBe("1.0")

          expect(rides[2].status).toBe("ready")
          expect(rides[2].path_url).toBeDefined()
          expect(rides[2].duration_seconds).toBeGreaterThan(0)
          expect(rides[2].distance_meters).toBeGreaterThan(0)
          expect(rides[2].from_spot).toBe(spot3Id)
          expect(rides[2].to_spot).toBe(SPOT_ID_1)
          expect(rides[2].date).toBe("2019-08-08")
          expect(rides[2].position).toBe("2.0")
        })

        it("Should have a total of 3 spots'", async () => {
          const spots = await database.manyOrNone<Spot>("select * from spots where guide=$1", [GUIDE_ID])
          expect(spots.length).toBe(3)

          const spot1 = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_1])
          expect(spot1.date).toBe("2019-07-31")
          expect(spot1.position).toBe("0.0")
          expect(spot1.created).toBeDefined()
          expect(spot1.updated).toBeDefined()
          expect(spot1.country).toBeDefined()
          expect(spot1.location).toBeDefined()
          expect(spot1.locked).toBe(true)
          expect(spot1.nights).toBe(1)
          expect(spot1.lat).toBe(LOCATIONS.Worthing.lat)
          expect(spot1.long).toBe(LOCATIONS.Worthing.long)

          const spot2 = await database.one<Spot>("select * from spots where id=$1", [spot2Id])
          expect(spot2.date).toBe("2019-08-01")
          expect(spot2.position).toBe("1.0")
          expect(spot2.created).toBeDefined()
          expect(spot2.updated).toBeDefined()
          expect(spot2.country).toBeDefined()
          expect(spot2.location).toBeDefined()
          expect(spot2.locked).toBe(true)
          expect(spot2.nights).toBe(2)
          expect(spot2.lat).toBe(LOCATIONS.Brighton.lat)
          expect(spot2.long).toBe(LOCATIONS.Brighton.long)

          const spot3 = await database.one<Spot>("select * from spots where id=$1", [spot3Id])
          expect(spot3.date).toBe("2019-08-03")
          expect(spot3.position).toBe("2.0")
          expect(spot3.created).toBeDefined()
          expect(spot3.updated).toBeDefined()
          expect(spot3.country).toBeDefined()
          expect(spot3.location).toBeDefined()
          expect(spot3.locked).toBe(true)
          expect(spot3.nights).toBe(5)
          expect(spot3.lat).toBe(LOCATIONS.London.lat)
          expect(spot3.long).toBe(LOCATIONS.London.long)
        })
      })


    })

  })

})

describe("When adding a spot to a guide with 1 spot and no start date", () => {

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
      nights: 2,
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
    expect(spot.position).toBe("1.0")
    expect(spot.date).toBeNull()
    expect(spot.locked).toBe(true)
    expect(spot.nights).toBe(2)
    expect(spot.location).toBeDefined()
    expect(spot.country).toBeDefined()
    expect(spot.lat).toBe(LOCATIONS.Brighton.lat)
    expect(spot.long).toBe(LOCATIONS.Brighton.long)
  })

  it("Schedule 2 computations to be executed ", async () => {
    expect(packet.computationIds.length).toBe(2)
    const computations = await database.manyOrNone<Computation>("select * from computations where guide=$1", GUIDE_ID)
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
    expect(spots[0].position).toBe("0.0")
    expect(spots[1].position).toBe("1.0")
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
      const stages = await database.selectStagesForGuide(GUIDE_ID)
      expect(stages.length).toBe(2)

      expect(stages[0].status).toBe("ready")
      expect(stages[0].updated).toBeDefined()
      expect(stages[0].updated!.getTime()).toBeGreaterThan(timestampBefore)
      expect(stages[0].position).toBe(0)

      expect(stages[1].status).toBe("ready")
      expect(stages[1].updated).toBeDefined()
      expect(stages[1].updated!.getTime()).toBeGreaterThan(timestampBefore)
      expect(stages[1].position).toBe(1)
    })

    it("Should have created 2 rides as 'ready'", async () => {
      const rides = await database.selectRidesForGuide(GUIDE_ID)
      expect(rides.length).toBe(2)

      expect(rides[0].status).toBe("ready")
      expect(rides[0].path_url).toBeDefined()
      expect(rides[0].duration_seconds).toBeGreaterThan(0)
      expect(rides[0].distance_meters).toBeGreaterThan(0)
      expect(rides[0].date).toBeNull()
      expect(rides[0].position).toBe("0.0")

      expect(rides[1].status).toBe("ready")
      expect(rides[1].path_url).toBeDefined()
      expect(rides[1].duration_seconds).toBeGreaterThan(0)
      expect(rides[1].distance_meters).toBeGreaterThan(0)
      expect(rides[1].date).toBeNull()
      expect(rides[1].position).toBe("1.0")
    })

  })

})


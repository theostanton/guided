import { actions, Contents, spinup } from "@guided/spinup"
import { Builder } from "@guided/spinup"
import action from "./index"
import faker from "faker"
import { database, generateId, Guide, Ride, Spot, Stage } from "@guided/database"

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

describe("When initially calculating a guide with no spots", () => {

  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)

  const contents: Contents = Builder.create()
    .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
    })
    .build()

  beforeAll(async () => {
    await spinup(contents)
    const guide = await database.one<Guide>("select * from guides where id=$1", [GUIDE_ID])
    expect(guide.title).toBe(GUIDE_TITLE)
    await action({
      stageId: GUIDE_ID,
    })
  }, TIMEOUT)

  it("Computes 0 rides", async () => {
    const rides = await database.manyOrNone<Ride>("select * from rides where guide=$1", [GUIDE_ID])
    expect(rides.length).toBe(0)
  })

  it("Computes 0 stages", async () => {
    // const rides = await database.many<Ride>("select * from rides")
    const stages = await database.manyOrNone<Stage>("select * from stages  where guide=$1", [GUIDE_ID])
    expect(stages.length).toBe(0)
  })

  it("Updates 0 spots", async () => {
    const spots = await database.manyOrNone<Spot>("select * from spots where guide=$1", [GUIDE_ID])
    expect(spots.length).toBe(0)
  })

})

describe("When initially calculating a two spot guide with no date", () => {

  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)

  const SPOT_ID_1 = generateId("spot_1")
  const SPOT_ID_2 = generateId("spot_2")

  const contents: Contents = Builder.create()
    .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
      builder.nextSpot(LATLNG.Brighton.lat, LATLNG.London.long, 2, "London", SPOT_ID_1)
      builder.nextSpot(LATLNG.Brighton.lat, LATLNG.Brighton.long, 5, "Brighton", SPOT_ID_2)
    })
    .build()

  beforeAll(async () => {
    await spinup(contents)
    const guide = await database.one<Guide>("select * from guides where id=$1", [GUIDE_ID])
    expect(guide.title).toBe(GUIDE_TITLE)
    await action({
      stageId: GUIDE_ID,
    })
  }, TIMEOUT)

  it("Computes 2 rides", async () => {
    const rides = await database.many<Ride>("select * from rides where guide=$1", [GUIDE_ID])
    expect(rides.length).toBe(2)

    expect(rides[0].guide).toBe(GUIDE_ID)
    expect(rides[0].from_spot).toBe(SPOT_ID_1)
    expect(rides[0].to_spot).toBe(SPOT_ID_2)
    expect(rides[0].stage).toBeDefined()

    expect(rides[1].guide).toBe(GUIDE_ID)
    expect(rides[1].from_spot).toBe(SPOT_ID_2)
    expect(rides[1].to_spot).toBe(SPOT_ID_1)
    expect(rides[1].stage).toBeDefined()

  })

  it("Computes 2 stages", async () => {
    // const rides = await database.many<Ride>("select * from rides")
    const stages = await database.many<Stage>("select * from stages  where guide=$1", [GUIDE_ID])

    expect(stages.length).toBe(2)

    const firstStage = await database.one<Stage>("select * from stages where from_spot=$1 and to_spot=$2", [SPOT_ID_1, SPOT_ID_2])

    expect(firstStage.from_spot).toBe(SPOT_ID_1)
    expect(firstStage.to_spot).toBe(SPOT_ID_2)
    expect(firstStage.guide).toBe(GUIDE_ID)

    const secondStage = await database.one<Stage>("select * from stages where from_spot=$1 and to_spot=$2", [SPOT_ID_2, SPOT_ID_1])

    expect(secondStage.from_spot).toBe(SPOT_ID_2)
    expect(secondStage.to_spot).toBe(SPOT_ID_1)
    expect(secondStage.guide).toBe(GUIDE_ID)
  })

  it("Updates 2 spots", async () => {
    const spots = await database.many<Spot>("select * from spots where guide=$1", [GUIDE_ID])
    expect(spots.length).toBe(2)

    const firstSpot = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_1])

    expect(firstSpot.id).toBe(SPOT_ID_1)
    expect(firstSpot.stage).toBe(null)
    expect(firstSpot.locked).toBe(true)
    expect(firstSpot.guide).toBe(GUIDE_ID)
    expect(firstSpot.country).toBeDefined()
    expect(firstSpot.position).toBe("0")
    expect(firstSpot.nights).toBe(2)

    const secondSpot = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_2])

    expect(secondSpot.id).toBe(SPOT_ID_2)
    expect(secondSpot.stage).toBe(null)
    expect(secondSpot.locked).toBe(true)
    expect(secondSpot.guide).toBe(GUIDE_ID)
    expect(secondSpot.country).toBeDefined()
    expect(secondSpot.position).toBe("1")
    expect(secondSpot.nights).toBe(5)
  })

})

describe("When initially calculating a three spot guide with no date", () => {

  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)

  const SPOT_ID_1 = generateId("spot_1")
  const SPOT_ID_2 = generateId("spot_2")
  const SPOT_ID_3 = generateId("spot_3")

  const contents: Contents = Builder.create()
    .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
      builder.nextSpot(LATLNG.Brighton.lat, LATLNG.London.long, 2, "London", SPOT_ID_1)
      builder.nextSpot(LATLNG.Brighton.lat, LATLNG.Brighton.long, 5, "Brighton", SPOT_ID_2)
      builder.nextSpot(LATLNG.Worthing.lat, LATLNG.Worthing.long, 1, "Worthing", SPOT_ID_3)
    })
    .build()

  beforeAll(async () => {
    await spinup(contents)
    const guide = await database.one<Guide>("select * from guides where id=$1", [GUIDE_ID])
    expect(guide.title).toBe(GUIDE_TITLE)
    await action({
      stageId: GUIDE_ID,
    })
  }, TIMEOUT)

  it("Computes 3 rides", async () => {
    const rides = await database.many<Ride>("select * from rides where guide=$1", [GUIDE_ID])
    expect(rides.length).toBe(3)

    expect(rides[0].guide).toBe(GUIDE_ID)
    expect(rides[0].from_spot).toBe(SPOT_ID_1)
    expect(rides[0].to_spot).toBe(SPOT_ID_2)
    expect(rides[0].stage).toBeDefined()

    expect(rides[1].guide).toBe(GUIDE_ID)
    expect(rides[1].from_spot).toBe(SPOT_ID_2)
    expect(rides[1].to_spot).toBe(SPOT_ID_3)
    expect(rides[1].stage).toBeDefined()

    expect(rides[2].guide).toBe(GUIDE_ID)
    expect(rides[2].from_spot).toBe(SPOT_ID_3)
    expect(rides[2].to_spot).toBe(SPOT_ID_1)
    expect(rides[2].stage).toBeDefined()
  })

  it("Computes 3 stages", async () => {
    const stages = await database.many<Stage>("select * from stages where guide=$1", [GUIDE_ID])

    expect(stages.length).toBe(3)

    const firstStage = await database.one<Stage>("select * from stages where from_spot=$1 and to_spot=$2", [SPOT_ID_1, SPOT_ID_2])

    expect(firstStage.from_spot).toBe(SPOT_ID_1)
    expect(firstStage.to_spot).toBe(SPOT_ID_2)
    expect(firstStage.guide).toBe(GUIDE_ID)

    const secondStage = await database.one<Stage>("select * from stages where from_spot=$1 and to_spot=$2", [SPOT_ID_2, SPOT_ID_3])

    expect(secondStage.from_spot).toBe(SPOT_ID_2)
    expect(secondStage.to_spot).toBe(SPOT_ID_3)
    expect(secondStage.guide).toBe(GUIDE_ID)

    const thirdStage = await database.one<Stage>("select * from stages where from_spot=$1 and to_spot=$2", [SPOT_ID_3, SPOT_ID_1])

    expect(thirdStage.from_spot).toBe(SPOT_ID_3)
    expect(thirdStage.to_spot).toBe(SPOT_ID_1)
    expect(thirdStage.guide).toBe(GUIDE_ID)
  })

  it("Update 3 spots", async () => {
    const spots = await database.many<Spot>("select * from spots where guide=$1", [GUIDE_ID])
    expect(spots.length).toBe(3)

    const firstSpot = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_1])

    expect(firstSpot.id).toBe(SPOT_ID_1)
    expect(firstSpot.stage).toBe(null)
    expect(firstSpot.locked).toBe(true)
    expect(firstSpot.guide).toBe(GUIDE_ID)
    expect(firstSpot.country).toBeDefined()
    expect(firstSpot.position).toBe("0")
    expect(firstSpot.nights).toBe(2)

    const secondSpot = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_2])

    expect(secondSpot.id).toBe(SPOT_ID_2)
    expect(secondSpot.stage).toBe(null)
    expect(secondSpot.locked).toBe(true)
    expect(secondSpot.guide).toBe(GUIDE_ID)
    expect(secondSpot.country).toBeDefined()
    expect(secondSpot.position).toBe("1")
    expect(secondSpot.nights).toBe(5)

    const thirdSpot = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_3])

    expect(thirdSpot.id).toBe(SPOT_ID_3)
    expect(thirdSpot.stage).toBe(null)
    expect(thirdSpot.locked).toBe(true)
    expect(thirdSpot.guide).toBe(GUIDE_ID)
    expect(thirdSpot.country).toBeDefined()
    expect(thirdSpot.position).toBe("2")
    expect(thirdSpot.nights).toBe(1)
  })

})

describe("When initially calculating a two spot guide with date", () => {

  const GUIDE_ID = generateId("guide")
  const GUIDE_TITLE = faker.random.words(3)

  const START_DATE = new Date(2020, 6, 1)
  const SPOT_ID_1 = generateId("spot_1")
  const SPOT_ID_2 = generateId("spot_2")

  //TODO Use date strings
  // const TODAY = new Date(2020, 6, 1)
  // const TOMORROW = new Date(2020, 6, 2)

  const contents: Contents = Builder.create()
    .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
      builder.withStartDate(START_DATE)
      builder.nextSpot(LATLNG.Brighton.lat, LATLNG.London.long, 0, "London", SPOT_ID_1)
      builder.nextSpot(LATLNG.Brighton.lat, LATLNG.Brighton.long, 5, "Brighton", SPOT_ID_2)
    })
    .build()

  beforeAll(async () => {
    await spinup(contents)
    const guide = await database.one<Guide>("select * from guides where id=$1", [GUIDE_ID])
    expect(guide.title).toBe(GUIDE_TITLE)
    await action({
      stageId: GUIDE_ID,
    })
  }, TIMEOUT)

  it("Creates guide", async () => {
    const guide = await database.one<Guide>("select * from guides where id=$1", [GUIDE_ID])
    expect(guide.id).toBe(GUIDE_ID)
    // expect(guide.start_date).toBe(TODAY)
    expect(guide.start_date).toBeDefined()
    expect(guide.title).toBe(GUIDE_TITLE)
  })

  it("Computes 2 rides", async () => {
    const rides = await database.many<Ride>("select * from rides where guide=$1", [GUIDE_ID])
    expect(rides.length).toBe(2)

    expect(rides[0].guide).toBe(GUIDE_ID)
    expect(rides[0].from_spot).toBe(SPOT_ID_1)
    expect(rides[0].to_spot).toBe(SPOT_ID_2)
    expect(rides[0].stage).toBeDefined()
    // expect(rides[0].date).toBe(TODAY)
    expect(rides[0].date).toBeDefined()

    expect(rides[1].guide).toBe(GUIDE_ID)
    expect(rides[1].from_spot).toBe(SPOT_ID_2)
    expect(rides[1].to_spot).toBe(SPOT_ID_1)
    expect(rides[1].stage).toBeDefined()
    // expect(rides[1].date).toBe(TOMORROW)
    expect(rides[1].date).toBeDefined()

  })

  it("Creates 2 stages", async () => {
    const stages = await database.many<Stage>("select * from stages where guide=$1", [GUIDE_ID])

    expect(stages.length).toBe(2)

    const firstStage = await database.one<Stage>("select * from stages where from_spot=$1 and to_spot=$2", [SPOT_ID_1, SPOT_ID_2])

    expect(firstStage.from_spot).toBe(SPOT_ID_1)
    expect(firstStage.to_spot).toBe(SPOT_ID_2)
    expect(firstStage.guide).toBe(GUIDE_ID)

    const secondStage = await database.one<Stage>("select * from stages where from_spot=$1 and to_spot=$2", [SPOT_ID_2, SPOT_ID_1])

    expect(secondStage.from_spot).toBe(SPOT_ID_2)
    expect(secondStage.to_spot).toBe(SPOT_ID_1)
    expect(secondStage.guide).toBe(GUIDE_ID)
  })

  it("Updates 2 spots", async () => {
    const spots = await database.many<Spot>("select * from spots where guide=$1", [GUIDE_ID])
    expect(spots.length).toBe(2)

    const firstSpot = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_1])

    expect(firstSpot.id).toBe(SPOT_ID_1)
    expect(firstSpot.stage).toBe(null)
    expect(firstSpot.locked).toBe(true)
    expect(firstSpot.guide).toBe(GUIDE_ID)
    expect(firstSpot.country).toBeDefined()
    expect(firstSpot.position).toBe("0")
    expect(firstSpot.nights).toBe(0)
    // expect(firstSpot.date).toBe(TODAY)
    expect(firstSpot.date).toBeDefined()

    const secondSpot = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_2])

    expect(secondSpot.id).toBe(SPOT_ID_2)
    expect(secondSpot.stage).toBe(null)
    expect(secondSpot.locked).toBe(true)
    expect(secondSpot.guide).toBe(GUIDE_ID)
    expect(secondSpot.country).toBeDefined()
    expect(secondSpot.position).toBe("1")
    expect(secondSpot.nights).toBe(5)
    // expect(secondSpot.date).toBe(TOMORROW)
    expect(secondSpot.date).toBeDefined()
  })

})

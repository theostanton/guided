import { UserBuilder, Contents, spinup } from "@guided/spinup"
import { database, generateId, Spot } from "@guided/database"
import faker from "faker"
import action from "./index"

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

describe("Repositions last spot [0,2] to [0,1]", () => {

  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)

  const SPOT_ID_1 = generateId("spot_1")
  const SPOT_ID_2 = generateId("spot_2")

  beforeAll(async () => {
    const contents: Contents = UserBuilder.create()
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.nextSpot(LATLNG.Brighton.lat, LATLNG.London.long, 2, "London", SPOT_ID_1)
        builder.nextSpot(LATLNG.Brighton.lat, LATLNG.Brighton.long, 5, "Brighton", SPOT_ID_2)
      })
      .build()
    contents.spots[0].position = "0"
    contents.spots[1].position = "2"
    await spinup(contents)

    const spots = await database.manyOrNone<Spot>("select * from spots where guide=$1", [GUIDE_ID])
    expect(spots[0].id).toBe(SPOT_ID_1)
    expect(spots[0].position).toBe("0",
    )
    expect(spots[1].id).toBe(SPOT_ID_2)
    expect(spots[1].position).toBe("2")
    await action(spots)
  })

  it("Repositions last", async () => {
    const spots = await database.manyOrNone<Spot>("select * from spots where guide=$1", [GUIDE_ID])
    expect(spots.length).toBe(2)

    expect(spots[0].id).toBe(SPOT_ID_1)
    expect(spots[0].position).toBe("0")

    expect(spots[1].id).toBe(SPOT_ID_2)
    expect(spots[1].position).toBe("1")
  })

})

describe("Repositions central spot [0,2,3] to [0,1,2]", () => {

  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)

  const SPOT_ID_1 = generateId("spot_1")
  const SPOT_ID_2 = generateId("spot_2")
  const SPOT_ID_3 = generateId("spot_3")

  beforeAll(async () => {
    const contents: Contents = UserBuilder.create()
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.nextSpot(LATLNG.Brighton.lat, LATLNG.London.long, 2, "London", SPOT_ID_1)
        builder.nextSpot(LATLNG.Brighton.lat, LATLNG.Brighton.long, 5, "Brighton", SPOT_ID_2)
        builder.nextSpot(LATLNG.Worthing.lat, LATLNG.Worthing.long, 5, "Worthing", SPOT_ID_3)
      })
      .build()
    contents.spots[0].position = "0"
    contents.spots[1].position = "2"
    contents.spots[2].position = "3"
    await spinup(contents)

    const spots = await database.manyOrNone<Spot>("select * from spots where guide=$1", [GUIDE_ID])

    expect(spots[0].id).toBe(SPOT_ID_1)
    expect(spots[0].position).toBe("0")

    expect(spots[1].id).toBe(SPOT_ID_2)
    expect(spots[1].position).toBe("2")

    expect(spots[2].id).toBe(SPOT_ID_3)
    expect(spots[2].position).toBe("3")
    await action(spots)
  })

  it("Repositions last two", async () => {
    const spots = await database.manyOrNone<Spot>("select * from spots where guide=$1", [GUIDE_ID])
    expect(spots.length).toBe(3)

    expect(spots[0].id).toBe(SPOT_ID_1)
    expect(spots[0].position).toBe("0")


    expect(spots[1].id).toBe(SPOT_ID_2)
    expect(spots[1].position).toBe("1")

    expect(spots[2].id).toBe(SPOT_ID_3)
    expect(spots[2].position).toBe("2")
  })

})

describe("Repositions all spots [1,2,3] to [0,1,2]", () => {

  const GUIDE_ID: string = generateId("guide")
  const GUIDE_TITLE: string = faker.random.words(3)

  const SPOT_ID_1 = generateId("spot_1")
  const SPOT_ID_2 = generateId("spot_2")
  const SPOT_ID_3 = generateId("spot_3")

  beforeAll(async () => {
    const contents: Contents = UserBuilder.create()
      .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
        builder.nextSpot(LATLNG.Brighton.lat, LATLNG.London.long, 2, "London", SPOT_ID_1)
        builder.nextSpot(LATLNG.Brighton.lat, LATLNG.Brighton.long, 5, "Brighton", SPOT_ID_2)
        builder.nextSpot(LATLNG.Worthing.lat, LATLNG.Worthing.long, 5, "Worthing", SPOT_ID_3)
      })
      .build()
    contents.spots[0].position = "1"
    contents.spots[1].position = "2"
    contents.spots[2].position = "3"
    await spinup(contents)

    const spots = await database.manyOrNone<Spot>("select * from spots where guide=$1", [GUIDE_ID])

    expect(spots[0].id).toBe(SPOT_ID_1)
    expect(spots[0].position).toBe("1")

    expect(spots[1].id).toBe(SPOT_ID_2)
    expect(spots[1].position).toBe("2")

    expect(spots[2].id).toBe(SPOT_ID_3)
    expect(spots[2].position).toBe("3")
    await action(spots)
  })

  it("Repositions all three", async () => {
    const spots = await database.manyOrNone<Spot>("select * from spots where guide=$1", [GUIDE_ID])
    expect(spots.length).toBe(3)

    expect(spots[0].id).toBe(SPOT_ID_1)
    expect(spots[0].position).toBe("0")

    expect(spots[1].id).toBe(SPOT_ID_2)
    expect(spots[1].position).toBe("1")

    expect(spots[2].id).toBe(SPOT_ID_3)
    expect(spots[2].position).toBe("2")
  })

})
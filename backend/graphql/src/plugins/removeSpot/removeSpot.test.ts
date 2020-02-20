// import { spinup, Contents, Builder } from "@guided/spinup"
// import { database, generateId, Ride, Spot, Stage } from "@guided/database"
// import faker from "faker"
// import * as computeRides from "@guided/compute-stage"
// import { execute } from "./index"
//
// const LATLNG: { [key in string]: { lat: number, long: number } } = {
//   London: {
//     lat: 51.5074,
//     long: -0.1278,
//   },
//   Brighton: {
//     lat: 50.8225,
//     long: -0.1372,
//   },
//   Worthing: {
//     lat: 50.8225,
//     long: -0.1372,
//   },
// }
//
//
// describe("When guide only had a single spot", () => {
//
//   const GUIDE_ID = generateId("guide")
//   const GUIDE_TITLE = faker.random.words(3)
//   const SPOT_ID = generateId("spot")
//
//   beforeAll(async () => {
//     const contents: Contents = Builder.create()
//       .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
//         builder.nextSpot(LATLNG.London.lat, LATLNG.London.long, 1, "London town", SPOT_ID)
//       })
//       .build()
//
//     await spinup(contents)
//     await computeRides.execute({
//       guideId: GUIDE_ID,
//     })
//
//     const spot = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID])
//     expect(spot.id).toBe(SPOT_ID)
//
//     await execute(SPOT_ID)
//   }, 60_000)
//
//   it("Spot to have been removed", async () => {
//     const spots = await database.none("select * from spots where guide=$1", [GUIDE_ID])
//     expect(spots).toBeNull()
//   })
//
//   it("Guide to have no spots", async () => {
//     const spots = await database.none("select * from spots where guide=$1", [GUIDE_ID])
//     expect(spots).toBeNull()
//   })
//
//   it("Guide to have no rides", async () => {
//     const rides = await database.none("select * from rides where guide=$1", [GUIDE_ID])
//     expect(rides).toBeNull()
//   })
//
//   it("Guide to have no stages", async () => {
//     const stages = await database.none("select * from stages where guide=$1", [GUIDE_ID])
//     expect(stages).toBeNull
//   })
// })
//
// describe("When guide had two spots", () => {
//
//   const GUIDE_ID = generateId("guide")
//   const GUIDE_TITLE = faker.random.words(3)
//   const SPOT_ID_1 = generateId("spot_1")
//   const SPOT_ID_REMOVED = generateId("spot_remove")
//
//   beforeAll(async () => {
//     const contents: Contents = Builder.create()
//       .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
//         builder.nextSpot(LATLNG.London.lat, LATLNG.London.long, 1, "London town", SPOT_ID_1)
//         builder.nextSpot(LATLNG.Brighton.lat, LATLNG.Brighton.long, 1, "Brighton town", SPOT_ID_REMOVED)
//       })
//       .build()
//
//     await spinup(contents)
//     await computeRides.execute({
//       guideId: GUIDE_ID,
//     })
//
//     const spots = await database.many<Spot>("select * from spots where guide=$1", [GUIDE_ID])
//     expect(spots.length).toBe(2)
//
//     await execute(SPOT_ID_REMOVED)
//   }, 60_000)
//
//   it("Spot to have been deleted", async () => {
//     const spots = await database.many<Spot>("select * from spots where guide=$1", [GUIDE_ID])
//     const spotIds = spots.map(({ id }) => {
//       return id
//     })
//     expect(spotIds).not.toContain(SPOT_ID_REMOVED)
//   })
//   it("Guide to contain one spot", async () => {
//     const spots = await database.many<Spot>("select * from spots where guide=$1", [GUIDE_ID])
//     expect(spots.length).toBe(1)
//     expect(spots[0].id).toContain(SPOT_ID_1)
//     expect(spots[0].position).toContain("0")
//   })
//
//   it("Guide to have no rides", async () => {
//     const rides = await database.manyOrNone<Ride>("select * from rides where guide=$1", [GUIDE_ID])
//     expect(rides.length).toBe(0)
//   })
//
//   it("Guide to have no stages", async () => {
//     const stages = await database.manyOrNone<Stage>("select * from stages where guide=$1", [GUIDE_ID])
//     expect(stages.length).toBe(0)
//   })
// })
//
// describe("When guide had three spots", () => {
//
//   const GUIDE_ID = generateId("guide")
//   const GUIDE_TITLE = faker.random.words(3)
//   const SPOT_ID_1 = generateId("spot_1")
//   const SPOT_ID_2 = generateId("spot_2")
//   const SPOT_ID_REMOVED = generateId("spot_remove")
//
//   beforeAll(async () => {
//     const contents: Contents = Builder.create()
//       .addGuide(GUIDE_TITLE, GUIDE_ID, (builder) => {
//         builder.nextSpot(LATLNG.London.lat, LATLNG.London.long, 1, "London town", SPOT_ID_1)
//         builder.nextSpot(LATLNG.Brighton.lat, LATLNG.Brighton.long, 1, "Brighton town", SPOT_ID_REMOVED)
//         builder.nextSpot(LATLNG.Worthing.lat, LATLNG.Worthing.long, 1, "Worthing town", SPOT_ID_2)
//       })
//       .build()
//
//     await spinup(contents)
//     await computeRides.execute({
//       guideId: GUIDE_ID,
//     })
//
//     const spots = await database.many<Spot>("select * from spots where guide=$1", [GUIDE_ID])
//     expect(spots.length).toBe(3)
//
//     await execute(SPOT_ID_REMOVED)
//   }, 60_000)
//
//   it("Spot to have been deleted", async () => {
//     const spots = await database.many<Spot>("select * from spots where guide=$1", [GUIDE_ID])
//     const spotIds = spots.map(({ id }) => {
//       return id
//     })
//     expect(spotIds).not.toContain(SPOT_ID_REMOVED)
//   })
//   it("First spot to not have been changed", async () => {
//     const spot = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_1])
//     expect(spot.id).toBe(SPOT_ID_1)
//     expect(spot.position).toBe("0")
//     expect(spot.date).toBeNull()
//     expect(spot.guide).toBe(GUIDE_ID)
//     expect(spot.country).toBeDefined()
//   })
//
//   it("Last spot to have position updated", async () => {
//     const spot = await database.one<Spot>("select * from spots where id=$1", [SPOT_ID_2])
//     expect(spot.id).toBe(SPOT_ID_2)
//     expect(spot.position).toBe("1")
//     expect(spot.date).toBeNull()
//     expect(spot.guide).toBe(GUIDE_ID)
//     expect(spot.country).toBeDefined()
//   })
//
//   it("Guide to have 2 rides", async () => {
//     const rides = await database.manyOrNone<Ride>("select * from rides where guide=$1", [GUIDE_ID])
//     expect(rides.length).toBe(2)
//
//     const firstRide = await database.one<Ride>("select * from rides where guide=$1 and from_spot=$2 and to_spot=$3", [GUIDE_ID, SPOT_ID_1, SPOT_ID_2])
//
//     expect(firstRide.id).toBeDefined()
//     expect(firstRide.from_spot).toBe(SPOT_ID_1)
//     expect(firstRide.to_spot).toBe(SPOT_ID_2)
//     expect(firstRide.path_url).toBeDefined()
//     expect(firstRide.duration_seconds).toBeGreaterThan(0)
//     expect(firstRide.distance_meters).toBeGreaterThan(0)
//
//     const secondRide = await database.one<Ride>("select * from rides where guide=$1 and from_spot=$2 and to_spot=$3", [GUIDE_ID, SPOT_ID_2, SPOT_ID_1])
//
//     expect(secondRide.id).toBeDefined()
//     expect(secondRide.from_spot).toBe(SPOT_ID_2)
//     expect(secondRide.to_spot).toBe(SPOT_ID_1)
//     expect(secondRide.path_url).toBeDefined()
//     expect(secondRide.duration_seconds).toBeGreaterThan(0)
//     expect(secondRide.distance_meters).toBeGreaterThan(0)
//   })
//
//   it("Guide to have 2 stages", async () => {
//     const stages = await database.manyOrNone<Stage>("select * from stages where guide=$1", [GUIDE_ID])
//     expect(stages.length).toBe(2)
//   })
// })

import { Feature } from "geojson"
import { uploadFeature } from "../src"

const RIDE_ID = "ride_fake_id"

const FEATURE: Feature = {
  "type": "Feature",
  "properties": { "name": "Null Island" },
  "geometry": {
    "type": "Point",
    "coordinates": [0, 0],
  },
}

// beforeAll(async () => {
//   await uploadFeature(RIDE_ID, FEATURE)
// })

xdescribe("Create dataset", () => {
  it("Creates dataset", async () => {

  })
  it("Uploads features", async () => {

  })
})
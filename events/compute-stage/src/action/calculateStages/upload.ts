import { pointsToGeoJson } from "@guided/geojson"
import { logJson } from "@guided/logger"

const AWS = require("aws-sdk")

const s3 = new AWS.S3()

export default async function(rideId: string, points: number[][]): Promise<string> {

  const geoJson = pointsToGeoJson(points)

  const response = await s3.upload({
    ACL: "public-read",
    Key: `${rideId}.json`,
    Body: JSON.stringify(geoJson, null, 4),
    Bucket: "guided-geojsons-staging",
  }).promise()


  logJson(response, "response.Location")
  return response.Location
}
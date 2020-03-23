import { pointsToGeoJson } from "@guided/geojson"
import { logJson } from "@guided/logger"

const AWS = require("aws-sdk")

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: "AKIAR52WVAOHPEKFNX7X",
    secretAccessKey: "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",
  },
})

export default async function(rideId: string, points: number[][]): Promise<string> {

  try {
    const geoJson = pointsToGeoJson(points)

    const response = await s3.upload({
      ACL: "public-read",
      Key: `${rideId}.json`,
      Body: JSON.stringify(geoJson,  null, 4),
      Bucket: "guided-geojsons-staging", //TODO
    }).promise()

    return response.Location
  } catch (e) {
    console.error("Failed to upload")
    console.error(e)
    return "Error"
  }
}
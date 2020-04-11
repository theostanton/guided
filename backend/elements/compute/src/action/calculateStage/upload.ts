import { pointsToGeoJson } from "@guided/geojson"
import { logJson } from "@guided/logger"

const AWS = require("aws-sdk")

function S3() {
  return new AWS.S3({
    region: process.env.DEFAULT_REGION,
    credentials: process.env.NODE_ENV === "development" ? {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    } : undefined,
  })
}

export default async function(rideId: string, points: number[][]): Promise<string> {

  try {
    const geoJson = pointsToGeoJson(points)

    const s3 = S3()

    const response = await s3.upload({
      ACL: "public-read",
      Key: `${rideId}.json`,
      Body: JSON.stringify(geoJson, null, 4),
      Bucket: process.env.GEOMETRIES_BUCKET_NAME,
    }).promise()
    return `https://${process.env.GEOMETRIES_BUCKET_NAME}/${response.Key}`
  } catch (e) {
    console.error("Failed to upload")
    console.error(e)
    return "Error"
  }
}
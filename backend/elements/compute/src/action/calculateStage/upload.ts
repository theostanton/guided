import { pointsToGeoJson } from "@guided/geojson"

const S3 = require("aws-sdk/clients/s3")

const s3 = new S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
})

export default async function(rideId: string, points: number[][]): Promise<string> {

  try {
    const geoJson = pointsToGeoJson(points)

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
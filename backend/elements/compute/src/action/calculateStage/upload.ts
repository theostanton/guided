import { pointsToGeoJson } from "@guided/geojson"
import S3 from "./S3"

export default async function(rideId: string, points: number[][]): Promise<string> {

  if (process.env.STAGE === "testing") {
    throw new Error("Dont do this in testing")
  }

  try {
    const geoJson = pointsToGeoJson(points)

    const s3 = S3()

    const response = await s3.upload({
      ACL: "public-read",
      Key: `${rideId}.json`,
      Body: JSON.stringify(geoJson, null, 4),
      Bucket: process.env.GEOMETRIES_BUCKET_NAME!,
    }).promise()
    return `https://${process.env.GEOMETRIES_BUCKET_NAME}/${response.Key}`
  } catch (e) {
    console.error("Failed to upload")
    console.error(e)
    return "Error"
  }
}
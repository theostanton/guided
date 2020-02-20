import { DirectionsRoute, LatLng } from "@googlemaps/google-maps-services-js/dist/common"
import { client, key } from "@guided/google"
import { database, Spot } from "@guided/database"
import { toLatLng } from "../../utils"

export default async function(fromSpot: Spot, toSpot: Spot): Promise<DirectionsRoute | null> {

  const origin: LatLng = toLatLng(fromSpot)
  const destination: LatLng = toLatLng(toSpot)

  const result = await client.directions({
    params: {
      key,
      origin,
      destination,
      mode: "driving",
    },
  })

  return result.data.routes.length ? result.data.routes[0] : null
}
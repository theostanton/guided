import { DirectionsRoute, LatLng } from "@googlemaps/google-maps-services-js/dist/common"
import { client, key } from "@guided/google"
import { log } from "@guided/logger"
import { Guide, Spot } from "@guided/database"
import { toLatLng } from "../../utils"

export type StageContext = {
  guide: Guide
  route: DirectionsRoute | null,
  startSpot: Spot,
  endSpot: Spot
}

export default async function(spots: Spot[], guide: Guide): Promise<StageContext[]> {

  const actions: Promise<StageContext>[] = []
  const circular = true // TODO guide.circular
  let stages = spots.length - (circular ? 0 : 1)
  for (let i = 0; i < stages; i++) {
    const startSpot = spots[i]
    const endSpot = spots[(i + 1) % spots.length]
    actions.push(getStageContext(startSpot, endSpot, guide))
  }

  const contexts: StageContext[] = await Promise.all(actions)

  log(`Generated ${contexts.length} contexts`)

  return contexts
}


async function getStageContext(startSpot: Spot, endSpot: Spot, guide: Guide): Promise<StageContext> {
  const origin: LatLng = toLatLng(startSpot)
  const destination: LatLng = toLatLng(endSpot)

  const result = await client.directions({
    params: {
      key,
      origin,
      destination,
      mode: "driving",
    },
  })

  return {
    guide,
    route: result.data.routes.length ? result.data.routes[0] : null,
    startSpot,
    endSpot,
  }
}
import { logJson } from "@guided/logger"
import Dao from "./dao"
import { ComputeRidesMessageBody, ComputeRidesResult } from "./types"
import { client, getInfo, key } from "@guided/google"
import * as geojson from "@guided/geojson"
import {
  DirectionsRoute,
  DirectionsStep,
  LatLng,
  LatLngLiteral,
  RouteLeg,
} from "@googlemaps/google-maps-services-js/dist/common"
import { generateId, Guide, Ride, Spot } from "@guided/database"

function toLatLng(spot: Spot): LatLngLiteral {
  return {
    lat: spot.lat,
    lng: spot.long,
  }
}

export type Stage = {
  newRides: Ride[]
  startSpot: Spot
  endSpot: Spot
  newSpots: Spot[]
}

async function getRoute(spots: Spot[]): Promise<DirectionsRoute> {
  const start: LatLng = toLatLng(spots[0])
  const waypoints: LatLngLiteral[] = spots.slice(1).map(spot => {
    return toLatLng(spot)
  })

  const result = await client.directions({
    params: {
      key,
      origin: start,
      destination: start,
      waypoints,
      mode: "driving",
      optimize: true, /*does nothing*/
    },
  })

  return result.data.routes[0]
}

function computeStage(leg: RouteLeg, startSpot: Spot, endSpot: Spot, guide: Guide): Stage {
  leg.end_address
  const newRides: Ride[] = []
  const newSpots: Spot[] = []

  const maxDurationPerRide = guide.max_hours_per_ride! * 60 * 60
  let currentStartSpotId: string = startSpot.id
  let duration: number = 0
  let distance: number = 0
  let currentPoints: number[][] = []

  function append(spot: Spot) {

    const newRide: Ride = {
      id: generateId("ride"),
      from_spot: currentStartSpotId,
      duration_seconds: duration,
      distance_meters: distance,
      path: geojson.pointsToGeoJson(currentPoints),
      guide: guide.id,
      to_spot: spot.id,
      owner: guide.owner,
    }
    newRides.push(newRide)
  }

  leg.steps.forEach(async (step: DirectionsStep, index: number) => {

    if ((duration + step.duration.value) > maxDurationPerRide) {
      const position = `${startSpot.position}.${newSpots.length + 1}`
      const placeInfo = await getInfo(step.start_location.lat, step.start_location.lng)
      const newSpot: Spot = {
        id: generateId("spot"),
        guide: guide.id,
        lat: step.start_location.lat,
        long: step.start_location.lng,
        nights: 1,
        location: placeInfo.label,
        country: placeInfo.countryCode,
        owner: guide.owner,
        label: `Spot ${position}`,
        locked: false,
        position,
      }
      newSpots.push(newSpot)
      append(newSpot)

      duration = 0
      currentPoints = []
      currentStartSpotId = newSpot.id
    }

    const points = geojson.polylineToPoints(step.polyline as unknown as { points: string })
    currentPoints.push(...points)
    duration += step.duration.value
    distance += step.distance.value

    if (index === leg.steps.length - 1) {
      append(endSpot)
    }
  })

  return {
    endSpot,
    startSpot,
    newSpots,
    newRides,
  }
}

export default async function(body: ComputeRidesMessageBody): Promise<ComputeRidesResult> {
  logJson(body, "handle compute-rides")

  const { guideId } = body

  const dao = new Dao(guideId)

  const guide = await dao.guide()

  await dao.deleteUnlocked()

  const spots = await dao.spots()

  const route = await getRoute(spots)

  const stages: Stage[] = []
  route.legs.forEach((leg, index) => {
    const stage = computeStage(leg, spots[index], spots[(index + 1) % spots.length], guide)
    stages.push(stage)
  })

  await dao.insertStages(stages)


  return {
    success: true,
  }
}
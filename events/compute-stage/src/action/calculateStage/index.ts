import { generateId, Guide, Ride, Spot } from "@guided/database"
import { DirectionsRoute, DirectionsStep } from "@googlemaps/google-maps-services-js/dist/common"
import * as geojson from "@guided/geojson"
import addDays from "date-fns/addDays"
import { executeWithContext } from "@guided/utils"
import { StageData } from "../../dao"
import { getInfo } from "@guided/google"
import upload from "./upload"


type SubContext = {
  stage: {
    stageId: string
    stepsCount: number
    guide: Guide
    startSpot: Spot
    endSpot: Spot
  }
  current: {
    index: number
    date: Date | null
    startSpotId: string
    distance: number
    duration: number
    points: number[][]
  },
  result: {
    newSpots: Spot[]
    newRides: Ride[]
    durationDays: number
  }
}

async function subaction(step: DirectionsStep, context: SubContext): Promise<SubContext> {

  const { stage } = context
  const maxDurationPerRide = stage.guide.max_hours_per_ride! * 60 * 60

  async function append(spot: Spot) {
    let rideId = generateId("ride")
    const pathUrl = await upload(rideId, context.current.points)
    const newRide: Ride = {
      id: rideId,
      from_spot: context.current.startSpotId,
      duration_seconds: context.current.duration,
      distance_meters: context.current.distance,
      date: context.current.date,
      path_url: pathUrl,
      guide: stage.guide.id,
      to_spot: spot.id,
      owner: stage.guide.owner,
      stage: stage.stageId,
      status: "ready",
      position: "!", //TODO
    }
    context.result.newRides.push(newRide)
  }

// Add spot and start new ride
  if ((context.current.duration + step.duration.value) > maxDurationPerRide) {
    const position = `${context.stage.startSpot.position}.${context.result.newSpots.length + 1}`
    const placeInfo = await getInfo(step.start_location.lat, step.start_location.lng)
    const newSpot: Spot = {
      id: generateId("spot"),
      guide: stage.guide.id,
      lat: step.start_location.lat,
      long: step.start_location.lng,
      nights: 1,
      date: context.current.date,
      location: placeInfo.label,
      country: placeInfo.countryCode,
      owner: stage.guide.owner,
      label: `Spot ${position}`,
      locked: false,
      created: new Date(),
      updated: null,
      stage: stage.stageId,
      position,
    }
    context.result.newSpots.push(newSpot)
    await append(newSpot)

    // Stored current Ride and new Spot with date, then incremented to next day
    context.result.durationDays += 1
    if (context.current.date) {
      context.current.date = addDays(context.current.date, context.result.durationDays)
    }

    context.current = {
      index: context.current.index,
      startSpotId: newSpot.id,
      date: context.current.date,
      points: [],
      distance: 0,
      duration: 0,
    }
  }

  // Append to current Ride
  const points = geojson.polylineToPoints(step.polyline as unknown as { points: string })
  context.current.points.push(...points)
  context.current.duration += step.duration.value
  context.current.distance += step.distance.value


  // End of Leg, so store Ride
  if (context.current.index === context.stage.stepsCount - 1) {
    await append(context.stage.endSpot)
    context.result.durationDays++
  }
  context.current.index++
  return context
}

export default async function computeStage(startDate: Date | null, stageId: string, guide: Guide, startSpot: Spot, endSpot: Spot, route: DirectionsRoute | null): Promise<StageData> {
  let currentDate: Date | null = startDate
  let currentStartSpotId: string = startSpot.id

  if (!route) {

    // const singlePoints: number[][] = [
    //   [startSpot.long, startSpot.lat],
    //   [endSpot.long, endSpot.lat],
    // ]

    const singleRide: Ride = {
      id: generateId("ride"),
      from_spot: currentStartSpotId,
      duration_seconds: -1,
      distance_meters: -1,
      date: currentDate,
      path_url: null,
      guide: guide.id,
      to_spot: endSpot.id,
      owner: guide.owner,
      stage: stageId,
      position: "!",
      status: "ready",
    }

    //TODO upload fake ride
    // upload()

    return {
      status: "failed",
      stageId,
      endSpot,
      startSpot: {
        ...startSpot,
        date: startDate,
      },
      newSpots: [],
      newRides: [singleRide],
      durationDays: 1,
    }
  }

  const leg = route.legs[0]

  const initial: SubContext = {
    stage: {
      stageId,
      guide,
      startSpot,
      endSpot,
      stepsCount: leg.steps.length,
    },
    current: {
      index: 0,
      date: startDate,
      duration: 0,
      points: [],
      distance: 0,
      startSpotId: startSpot.id,
    },
    result: {
      durationDays: 0,
      newRides: [],
      newSpots: [],
    },
  }
  const { result } = await executeWithContext(leg.steps, subaction, initial)

  return {
    status: "success",
    stageId,
    endSpot,
    startSpot: {
      ...startSpot,
      date: startDate,
    },
    ...result,
  }
}
import { generateId, Guide, Ride, Spot } from "@guided/database"
import { StageContext } from "../getStageContexts"
import { DirectionsStep } from "@googlemaps/google-maps-services-js/dist/common"
import * as geojson from "@guided/geojson"
import addDays from "date-fns/addDays"
import executeWithContext from "../../utils/executeWithContext"
import { Stage } from "../../dao"
import { getInfo } from "@guided/google"


type SubContext = {
  stage: {
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

  function append(spot: Spot) {
    const newRide: Ride = {
      id: generateId("ride"),
      from_spot: context.current.startSpotId,
      duration_seconds: context.current.duration,
      distance_meters: context.current.distance,
      date: context.current.date,
      path: geojson.pointsToGeoJson(context.current.points),
      guide: stage.guide.id,
      to_spot: spot.id,
      owner: stage.guide.owner,
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
      position,
    }
    context.result.newSpots.push(newSpot)
    append(newSpot)

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
    append(context.stage.endSpot)
    context.result.durationDays++
  }
  context.current.index++
  return context
}

async function computeStage(startDate: Date | null, { startSpot, guide, endSpot, route }: StageContext): Promise<Stage> {
  let currentDate: Date | null = startDate
  let currentStartSpotId: string = startSpot.id

  if (!route) {

    const singlePoints: number[][] = [
      [startSpot.long, startSpot.lat],
      [endSpot.long, endSpot.lat],
    ]

    const singleRide: Ride = {
      id: generateId("ride"),
      from_spot: currentStartSpotId,
      duration_seconds: -1,
      distance_meters: -1,
      date: currentDate,
      path: geojson.pointsToGeoJson(singlePoints),
      guide: guide.id,
      to_spot: endSpot.id,
      owner: guide.owner,
    }

    return {
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
    endSpot,
    startSpot: {
      ...startSpot,
      date: startDate,
    },
    ...result,
  }
}

type Context = {
  currentDate: Date | null
  stages: Stage[]
}

async function action(stageContext: StageContext, context: Context): Promise<Context> {
  const stage = await computeStage(context.currentDate, stageContext)

  return {
    currentDate: context.currentDate && addDays(context.currentDate, stage.durationDays),
    stages: [...context.stages, stage],
  }
}

export default async function(startDate: Date | null, stageContexts: StageContext[]): Promise<Stage[]> {

  const context: Context = {
    currentDate: startDate,
    stages: [],
  }
  const { stages } = await executeWithContext(stageContexts, action, context)

  return stages
}
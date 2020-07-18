import { Bound, RideFragment } from "../../api/generated"
import WebMercatorViewport from "viewport-mercator-project"


type ViewPort = {
  latitude: number,
  longitude: number,
  zoom: number
}

type Padding = {
  right: number
  top: number
  bottom: number
  left: number
}

const DEFAULT = {
  longitude: -0.1278,
  latitude: 51.5074,
}

export function generateBounds(ride: RideFragment): Bound {

  if (!ride.fromSpot || !ride.toSpot) {
    return {
      west: DEFAULT.longitude,
      east: DEFAULT.longitude,
      north: DEFAULT.latitude,
      south: DEFAULT.latitude,
    }
  }

  const north = Math.max(ride!.fromSpot!.lat!, ride!.toSpot!.lat!)
  const east = Math.max(ride!.fromSpot!.long!, ride!.toSpot!.long!)
  const south = Math.min(ride!.fromSpot!.lat!, ride!.toSpot!.lat!)
  const west = Math.min(ride!.fromSpot!.long!, ride!.toSpot!.long!)

  return {
    east,
    north,
    south,
    west,
  }
}


export function generateViewport(bounds: Bound, width: number, height: number, padding: Padding): ViewPort {

  const viewport = new WebMercatorViewport({
    height,
    width,
  }).fitBounds(
    [
      [bounds.west!, bounds.south!], [
      bounds.east!, bounds.north!]],
    {
      padding,
    },
  )

  return {
    latitude: viewport.latitude,
    longitude: viewport.longitude,
    zoom: viewport.zoom,
  }
}
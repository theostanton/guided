import {Bound, RideFragment} from "api/generated"
import WebMercatorViewport from "viewport-mercator-project"
import {CameraBounds, MapPadding, Viewport} from "./CameraStore";


const DEFAULT = {
  longitude: -0.1278,
  latitude: 51.5074,
}

export function generateBounds(ride: RideFragment): Bound {

  if (!ride.from || !ride.to) {
    return {
      west: DEFAULT.longitude,
      east: DEFAULT.longitude,
      north: DEFAULT.latitude,
      south: DEFAULT.latitude,
    }
  }

  const north = Math.max(ride!.from!.lat!, ride!.to!.lat!)
  const east = Math.max(ride!.from!.long!, ride!.to!.long!)
  const south = Math.min(ride!.from!.lat!, ride!.to!.lat!)
  const west = Math.min(ride!.from!.long!, ride!.to!.long!)

  return {
    east,
    north,
    south,
    west,
  }
}

export function generateViewport(bounds: CameraBounds, width: number, height: number, padding: MapPadding): Viewport {

  const viewport = new WebMercatorViewport({
    height,
    width,
  }).fitBounds(
    [
      [bounds.southWest.longitude!, bounds.southWest.latitude!], [
      bounds.northEast.longitude!, bounds.northEast.latitude!]],
    {
      padding,
    },
  )

  return {
    latitude: viewport.latitude,
    longitude: viewport.longitude,
    zoom: viewport.zoom,
    // transitionDuration: 'auto'
  }
}
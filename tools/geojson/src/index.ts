// @ts-ignore
import pirxpilot from "@pirxpilot/google-polyline"
import { GeoJSON } from "geojson"

export function polylineToPoints(polyline: { points: string }): number[][] {
  return pirxpilot.decode(polyline.points)
}

export function pointsToGeoJson(points: number[][]): GeoJSON {
  return {
    type: "LineString",
    coordinates: points,
  }
}
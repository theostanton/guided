// @ts-ignore
import pirxpilot from "@pirxpilot/google-polyline"
import { FeatureCollection } from "geojson"

export function polylineToPoints(polyline: { points: string }): number[][] {
  return pirxpilot.decode(polyline.points)
}

export function pointsToGeoJson(points: number[][]): FeatureCollection {
  return {
    type: "FeatureCollection",
    features: [
      {
        geometry: {
          type: "LineString",
          coordinates: points,
        },
        properties: {},
        type: "Feature",
      },
    ],
  }
}
import CameraStore from "./CameraStore";
import {GeoJSON} from "geojson";
import GuideStore from "screens/Guide/GuideStore";

export type MapProps = {
  cameraStore?: CameraStore
  onClick?: (event: MapClickEvent) => Promise<void> | void
}

export type MapClickEvent = LatLong & {}

export type LatLong = {
  latitude: number
  longitude: number
}

export function toPosition(latLong: LatLong): GeoJSON.Position {
  return [latLong.longitude, latLong.latitude]
}
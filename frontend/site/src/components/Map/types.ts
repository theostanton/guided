  export type MapProps = LatLong & {
  zoom: number
  onClick?: (event: MapClickEvent) => Promise<void> | void
}

export type MapClickEvent = LatLong & {}

export type LatLong = {
  latitude: number
  longitude: number
}
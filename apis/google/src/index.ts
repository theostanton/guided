import { Client } from "@googlemaps/google-maps-services-js"
import { logJson } from "@guided/logger"

export const key = "AIzaSyDQFYYLKKcqmY0RWlysZOQlWPgGZEAM3po"
const client = new Client({})

// const LONDON: LatLng = {
//   lat: 51.4703,
//   lng: -0.0674,
// }

// const WORTHING: LatLng = {
//   lat: 50.8179,
//   lng: -0.3729,
// }
//
// const BRIGHTON: LatLng = {
//   lat: 50.8225,
//   lng: -0.1372,
// }
// const HORSHAM: LatLng = {
//   lat: 51.0629,
//   lng: -0.3259,
// }

export type PlaceInfo = {
  label: string
  countryCode: string
}

export async function getInfo(lat: number, lng: number): Promise<PlaceInfo> {

  const result = await client.reverseGeocode({
    params: {
      key,
      latlng: {
        lat, lng,
      },
    },
  })
  logJson(result.data.results[0], "result.data.results[0]")
  const types = ["postal_town", "political", "administrative_area_level_2"]
  const label = types.map(type => {
    const component = result.data.results[0].address_components.find((component) => {
      return component.types.some(componentType => {
        return componentType === type
      })
    })
    if (component) {
      return component.short_name
    } else {
      return undefined
    }
  }).find(value => {
    return value
  }) || "Label"

  return {
    label,
    countryCode: "NA",
  }
}

export {
  client,
}
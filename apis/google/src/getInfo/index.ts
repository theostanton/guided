import { client, key, PlaceInfo } from "../index"
import { GeocodeResult } from "@googlemaps/google-maps-services-js/dist/common"
import { log } from "@guided/logger"


function extractCountry(results: GeocodeResult[]): string {
  for (let i = 0; i < results.length - 1; i++) {
    const result = results[i]
    for (let j = 0; j < result.address_components.length - 1; j++) {
      const component = result.address_components[j]
      for (let k = 0; k < component.types.length - 1; k++) {
        const type = component.types[k]
        log(type)
        if (type === "country") {
          return component.short_name
        }
      }
    }
  }
  throw new Error(`No country found`)
}

export default async function(lat: number, lng: number): Promise<PlaceInfo> {

  const result = await client.reverseGeocode({
    params: {
      key,
      latlng: {
        lat, lng,
      },
    },
  })

  if (result.data.results.length === 0) {
    throw new Error(`No results for lat=${lat} long=${lng}`)
  }

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
    countryCode: extractCountry(result.data.results),
  }
}
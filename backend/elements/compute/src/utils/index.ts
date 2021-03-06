import { LatLngLiteral } from '@googlemaps/google-maps-services-js/dist/common'
import { Spot } from '@guided/database'

export function toLatLng(spot: Spot): LatLngLiteral {
    return {
        lat: spot.lat,
        lng: spot.long,
    }
}

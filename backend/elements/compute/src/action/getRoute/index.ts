import {
    DirectionsRoute,
    LatLng, TravelMode,
} from "@googlemaps/google-maps-services-js/dist/common"
import { client } from '@guided/google'
import { Spot } from '@guided/database'
import { toLatLng } from '../../utils'

export default async function (
    mode: 'driving' | 'bicycling' | 'walking',
    fromSpot: Spot,
    toSpot: Spot
): Promise<DirectionsRoute | null> {
    const origin: LatLng = toLatLng(fromSpot)
    const destination: LatLng = toLatLng(toSpot)

    const result = await client.directions({
        params: {
            key: process.env.GOOGLE_KEY!,
            origin,
            destination,
            mode:TravelMode[mode],
            avoid: [],
        },
    })

    return result.data.routes.length ? result.data.routes[0] : null
}

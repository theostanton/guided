import googlemaps, {DirectionsResponse, PlaceSearchResponse, ReverseGeocodingResponse} from '@google/maps'

export const client = googlemaps.createClient({
    key: 'AIzaSyDQFYYLKKcqmY0RWlysZOQlWPgGZEAM3po',
    Promise: Promise
});


export async function directions(startLat: number, startLong: number, endLat: number, endLong: number): Promise<DirectionsResponse> {

    const {json: data} = await client.directions({
        origin: {
            lat: startLat,
            lng: startLong
        },
        destination: {
            lat: endLat,
            lng: endLong
        }
    }).asPromise();

    return data;
}

export async function reverseGeocode(lat: number, lng: number): Promise<ReverseGeocodingResponse> {

    const {json: data} = await client.reverseGeocode({
        latlng: {
            lat,
            lng
        }
    }).asPromise();

    return data;
}
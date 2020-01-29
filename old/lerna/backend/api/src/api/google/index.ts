import googlemaps, {DirectionsResponse, PlaceSearchResponse, ReverseGeocodingResponse} from '@google/maps'
import {LatLng} from "@guided/common";

export const client = googlemaps.createClient({
    key: 'AIzaSyDQFYYLKKcqmY0RWlysZOQlWPgGZEAM3po',
    Promise: Promise
});


export async function directions(startLat: number, startLong: number, endLat: number, endLong: number, waypoints: LatLng[]): Promise<DirectionsResponse> {

    const {json: data} = await client.directions({
        waypoints: waypoints.map((waypoint: LatLng) => {
            return {
                lng: waypoint.long,
                lat: waypoint.lat
            }
        }),
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
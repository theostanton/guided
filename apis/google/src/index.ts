import { Client } from "@googlemaps/google-maps-services-js"

export const key = "AIzaSyDQFYYLKKcqmY0RWlysZOQlWPgGZEAM3po"
const client = new Client({})

export type PlaceInfo = {
  label: string
  countryCode: string
}

export {
  client,
}
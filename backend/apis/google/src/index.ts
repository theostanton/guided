import { Client } from "@googlemaps/google-maps-services-js"
import getInfo from "./getInfo"

const client = new Client({})

export type PlaceInfo = {
  label: string
  countryCode: string | null
}

export {
  client, getInfo,
}
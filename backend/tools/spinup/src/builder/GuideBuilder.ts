import slugify from "slugify"
import { generateId, Guide, Spot, TransportType } from "@guided/database"
import { dateString } from "@guided/utils"

export type MockLocation = "Worthing" | "London" | "Brighton" | "Horsham"

type LatLng = {
  lat: number
  long: number
}

export const LOCATIONS: { [location in MockLocation]: LatLng } = {
  London: {
    lat: 51.5074,
    long: -0.1278,
  },
  Brighton: {
    lat: 50.8225,
    long: -0.1372,
  },
  Worthing: {
    lat: 50.8179,
    long: -0.3729,
  },
  Horsham: {
    lat: 51.0629,
    long: -0.3259,
  },
}


export default class GuideBuilder {

  private readonly username: string
  private readonly id: string
  private max_hours_per_ride: number
  private readonly title: string
  private readonly slug: string
  private start_date: string | null
  private transport_type: TransportType
  private is_circular: boolean
  private spots: Spot[] = []
  private position: number = 0

  private constructor(username: string, title: string) {
    this.username = username
    this.title = title
    this.slug = slugify(title, {
      lower: true,
      remove: /[*+~.()'"!:@_]/g,
    })
    this.id = `${this.username}_${this.slug}`
    this.max_hours_per_ride = 6
    this.start_date = null
    this.transport_type = "MOTORCYCLE"
    this.is_circular = false
  }

  get guideId() {
    return this.id
  }

  static create(username: string, title: string): GuideBuilder {
    return new GuideBuilder(username, title)
  }

  withStartDate(year: number, month: number, date: number): GuideBuilder {
    this.start_date = dateString(new Date(year, month - 1, date))
    return this
  }

  withMaxHours(maxHoursPerRide: number): GuideBuilder {
    this.max_hours_per_ride = maxHoursPerRide
    return this
  }

  nextSpotLocation(location: MockLocation, nights: number, id?: string, label?: string): GuideBuilder {
    const spot: Spot = {
      id: id || generateId("spot"),
      lat: LOCATIONS[location].lat,
      long: LOCATIONS[location].long,
      locked: true,
      nights,
      guide: this.id,
      label: label ? label : null,
      created: new Date(),
      updated: null,
      country: null,
      date: null,
      location: null,
      owner: this.username,
      position: `${this.position.toString()}.0`,
      stage: null,
    }
    this.position++
    this.spots.push(spot)
    return this
  }

  nextSpot(lat: number, long: number, nights: number, label?: string, id?: string): GuideBuilder {
    const spot: Spot = {
      id: id || generateId("spot"),
      lat,
      long,
      locked: true,
      nights,
      guide: this.id,
      label: label ? label : null,
      created: new Date(),
      updated: null,
      country: null,
      date: null,
      location: null,
      owner: this.username,
      position: this.position.toString(),
      stage: null,
    }
    this.position++
    this.spots.push(spot)
    return this
  }

  build(): { guide: Guide, spots: Spot[] } {
    return {
      guide: {
        id: this.id,
        max_hours_per_ride: this.max_hours_per_ride,
        owner: this.username,
        slug: this.slug,
        start_date: this.start_date,
        transport_type: this.transport_type,
        is_circular: this.is_circular,
        title: this.title,
        created: new Date(),
        updated: null,
      },
      spots: this.spots,
    }
  }

}

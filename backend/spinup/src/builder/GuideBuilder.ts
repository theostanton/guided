import slugify from "slugify"
import { generateId, Guide, Spot } from "@guided/database"

export type MockLocation = "Worthing" | "London" | "Brighton"

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
}

export default class GuideBuilder {

  static create(username: string, title: string, guideId?: string): GuideBuilder {
    return new GuideBuilder(username, title, guideId)
  }

  private readonly username: string
  private readonly id: string
  private max_hours_per_ride: number
  private readonly title: string
  private readonly slug: string
  private start_date: Date | null
  private spots: Spot[] = []
  private position: number = 0

  private constructor(username: string, title: string, guideId?: string) {
    this.username = username
    this.id = guideId || generateId("guide")
    this.title = title
    this.slug = slugify(title, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    })
    this.max_hours_per_ride = 6
    this.start_date = null
  }

  withStartDate(startDate: Date): GuideBuilder {
    this.start_date = startDate
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
      position: this.position.toString(),
      stage: null
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
      stage: null
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
        title: this.title,
      },
      spots: this.spots,
    }
  }

}

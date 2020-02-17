import slugify from "slugify"
import { generateId, Guide, Spot } from "@guided/database"

export default class GuideBuilder {

  static create(username: string, title: string): GuideBuilder {
    return new GuideBuilder(username, title)
  }

  private readonly username: string
  private readonly id: string
  private max_hours_per_ride: number
  private readonly title: string
  private readonly slug: string
  private start_date: Date | null
  private spots: Spot[] = []
  private position: number = 0

  private constructor(username: string, title: string) {
    this.username = username
    this.id = generateId("guide")
    this.title = title
    this.slug = slugify(title)
    this.max_hours_per_ride = 6
    this.start_date = null
  }

  withMaxHours(maxHoursPerRide: number): GuideBuilder {
    this.max_hours_per_ride = maxHoursPerRide
    return this
  }

  nextSpot(lat: number, long: number, nights: number, label?: string): GuideBuilder {
    const spot: Spot = {
      id: generateId("spot"),
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
        title: this.title,
      },
      spots: this.spots,
    }
  }

}

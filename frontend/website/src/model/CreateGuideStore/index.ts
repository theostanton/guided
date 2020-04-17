import {
  CreateGuideWithSpotInput,
  Geocode,
  GeocodeDocument,
  GeocodeQuery,
  TransportType,
} from "../../api/generated"
import { action, computed, observable } from "mobx"
import AwesomeDebouncePromise from "awesome-debounce-promise"
import { client } from "../../api"

type Stage = "details" | "locations" | "members" | "save"

// export type CreateGuideSpot = {
//   title: string
//   location: string
//   latitutde: number
//   longitude: number
//   country: string
//   nights: number
// }

export default class CreateGuideStore {

  @observable
  stage: Stage = "details"

  @observable
  title: string | undefined

  @observable
  maxHoursPerRide: number = 6

  @observable
  isCircular: boolean = true

  @observable
  transportType: TransportType | undefined

  @observable
  showErrors: boolean = false

  @observable
  startDate: string | undefined

  @observable
  spots: CreateGuideWithSpotInput[]

  constructor() {
    this.spots = []
    this.geocodeResult = {
      status: "clear",
      error: undefined,
      geocodes: undefined,
    }
  }

  goToStage(stage: Stage) {
    this.stage = stage
  }

  updateTitle(title: string) {
    this.title = title
  }

  titleValidation(): string | undefined {
    if (!this.title || this.title.length === 0) {
      return "Needs a title"
    }
  }

  updateMaxHours(maxHoursPerRide: number) {
    this.maxHoursPerRide = maxHoursPerRide
  }

  updateIsCircular(isCircular: boolean) {
    this.isCircular = isCircular
  }

  updateTransportType(transportType: TransportType) {
    this.transportType = transportType
  }

  transportTypeValidation(): string | undefined {
    if (!this.transportType) {
      return "Pick a vehicle type"
    }
  }

  updateStartDate(startDate: string | undefined) {
    this.startDate = startDate
  }

  updateNights(index: number, nights: number) {
    //TOOD better way to trigger update
    this.spots = this.spots.map((spot, _index) => {
      if (_index === index) {
        return {
          ...spot,
          nights,
        }
      } else {
        return spot
      }
    })
  }

  validateDetails(): boolean {
    if (this.titleValidation() || this.transportTypeValidation()) {
      return false
    } else {
      return true
    }
  }

  updateShowErrors(showErrors: boolean) {
    this.showErrors = showErrors
  }

  removeSpot(index: number) {
    this.spots.splice(index, 1)
  }

  reorderSpots(startIndex: number, endIndex: number) {
    const result = Array.from(this.spots)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    this.spots = result
  }

  private fetchGeocodes = AwesomeDebouncePromise(
    this.executeGeocode.bind(this),
    200,
    {
      accumulate: false,
      onlyResolvesLast: true,
    },
  )

  @observable
  geocodeResult: {
    error?: string | undefined
    status: "loading" | "error" | "success" | "clear"
    geocodes?: Geocode[] | undefined
  }

  private clearGeocodes() {
    this.geocodeResult = {
      status: "clear",
    }
  }

  @action
  async executeGeocode(query: string) {

    if (query === "") {
      this.clearGeocodes()
      return
    }

    const result = await client.query<GeocodeQuery>({
      query: GeocodeDocument,
      variables: {
        query,
      },
    })

    if (result.errors) {
      this.geocodeResult = {
        status: "error",
        error: result.errors.map(error => {
          return error.message
        }).join("\n"),
      }
    } else {
      this.geocodeResult = {
        status: "success",
        geocodes: result.data.geocode.geocodes.map(geocode => geocode),
      }
    }
  }

  @action
  saveSpot(label: string, geocode: Geocode, nights: number) {
    this.spots.push({
      label,
      lat: geocode.latitude,
      long: geocode.longitude,
      location: geocode.label,
      country: geocode.countryCode,
      nights,
    })
    this.clearGeocodes()
  }

  @action
  async updateGeocode(query: string | undefined, clear: boolean) {
    if (clear) {
      this.geocodeResult = undefined
    }
    if (!query || query.length === 0) {
      this.clearGeocodes()
    } else {
      this.geocodeResult = {
        status: "loading",
      }
    }
    await this.fetchGeocodes(query)
  }

  async create() {
  }
}


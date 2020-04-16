import { Geocode, GeocodeDocument, GeocodeQuery, GuideFragment, GuideInput, TransportType } from "../../api/generated"
import { action, computed, observable } from "mobx"
import AwesomeDebouncePromise from "awesome-debounce-promise"
import { client } from "../../api"
import { log, logJson } from "../../utils/logger"

type Stage = "details" | "locations" | "members"

export type CreateGuideSpot = {
  title: string
  location: string
  latitutde: number
  longitude: number
  country: string
  nights: number
}

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
  spots: CreateGuideSpot[]

  constructor() {
    this.spots = []
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
    500,
    {
      accumulate: false,
      onlyResolvesLast: true,
    },
  )

  @observable
  geocodes: Geocode[] | undefined = undefined

  @observable
  loadingGeocodes: boolean = false

  @action
  async executeGeocode(query: string) {
    if (query === "") {
      return
    }
    const result = await client.query<GeocodeQuery>({
      query: GeocodeDocument,
      variables: {
        query,
      },
    })

    this.geocodes = result.data.geocode.geocodes
    log(`Got ${this.geocodes.length} geocodes`)
    this.loadingGeocodes = false
  }

  @action
  saveSpot(label:string,geocode:Geocode,nights:number) {
    this.spots.push({
      title: label,
      latitutde: geocode.latitude,
      longitude: geocode.longitude,
      location: geocode.label,
      country: geocode.countryCode,
      nights,
    })
    this.loadingGeocodes = false
    this.geocodes = undefined
  }

  @action
  async updateGeocode(query: string | undefined,clear:boolean) {
    if (clear) {
      this.geocodes = undefined
    }
    if (!query || query.length === 0) {
      this.geocodes = []
      this.loadingGeocodes = false
    } else {
      this.loadingGeocodes = true
    }
    await this.fetchGeocodes(query)
  }
}


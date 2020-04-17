import {
  CreateGuideWithSpotInput,
  Geocode,
  TransportType,
} from "../../api/generated"
import { action, observable } from "mobx"
import randomKey from "../../utils/randomKey"

type Stage = "details" | "locations" | "members" | "save"


export type CreateGuideStoreSpot = Partial<CreateGuideWithSpotInput> & { key: string }

export default class CreateGuideStore {

  @observable
  stage: Stage = "locations"

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
  showSpotsErrors: boolean = false

  @observable
  startDate: string | undefined

  @observable
  spots: CreateGuideStoreSpot[]

  constructor() {
    this.spots = [{
      key: randomKey(),
      nights: 0,
    }]
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

  validateDetails(): boolean {
    if (this.titleValidation() || this.transportTypeValidation()) {
      return false
    } else {
      return true
    }
  }

  validateSpots(): boolean {
    return !this.spots.some(spot => {
      return spot.label === "" || !spot.location || spot.location === ""
    })
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

  @action
  addSpot(index: number) {
    this.showSpotsErrors = false
    this.spots.splice(index, 0, {
      key: randomKey(),
      label: "",
      nights: 1,
    })
  }

  @action
  updateSpot(index: number, fields: Partial<CreateGuideWithSpotInput>) {
    this.spots[index] = {
      ...this.spots[index],
      ...fields,
    }
  }

}


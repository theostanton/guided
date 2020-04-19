import {
  CreateGuideWithSpotInput,
  Geocode, GuideFragment,
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
  guide: GuideFragment | undefined = undefined

  @observable
  isCircular: boolean

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

  updateIsCircular(isCircular: boolean) {
    this.isCircular = isCircular
  }


  updateStartDate(startDate: string | undefined) {
    this.startDate = startDate
  }

  validateSpots(): boolean {
    return !this.spots.some(spot => {
      return spot.label === "" || !spot.location || spot.location === ""
    })
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

  @action
  async upsertGuide(title:string, maxHoursPerRide:number,type:TransportType):Promise<boolean>{

  }

}


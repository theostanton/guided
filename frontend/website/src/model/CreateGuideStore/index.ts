import {
  AddSpotInput,
  CreateGuideDocument,
  CreateGuideMutation,
  CreateGuideMutationVariables,
  GuideFragment,
  GuideStagesDocument,
  GuideStagesSubscription,
  TransportType,
  UpdateGuideDocument,
  UpdateGuideMutation,
  UpdateGuideMutationVariables,
  UpdateGuideResult,
} from "api/generated"
import { action, observable } from "mobx"
import randomKey from "utils/randomKey"
import { client } from "api"
import { subscriptionClient } from "api/client"
import { ZenObservable } from "zen-observable-ts/lib/types"
import { logError, logJson } from "utils/logger"

type Stage = "details" | "locations" | "members" | "save"


export type CreateGuideStoreSpot = Partial<AddSpotInput> & { key: string, location?: string, nights: number }

export default class CreateGuideStore {

  #guideId: string | undefined

  @observable
  stage: Stage = "details"

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
  #subscription: ZenObservable.Subscription | undefined

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
  updateSpot(index: number, fields: Partial<AddSpotInput>) {
    this.spots[index] = {
      ...this.spots[index],
      ...fields,
    }
  }

  subscribe() {

    if (!this.#guideId) {
      throw new Error("No guideId")
    }

    if (this.#subscription) {
      this.#subscription.unsubscribe()
    }

    this.#subscription = subscriptionClient.subscribe<GuideStagesSubscription>({
      query: GuideStagesDocument,
      variables: {
        id: this.#guideId,
      },
    }).subscribe(value => {
      if (value.data) {
        logJson(value.data, "value.data")
        this.guide = value.data.guide
      } else if (value.errors) {
        logError("errors")
        value.errors.forEach(error => {
          logError(error.message)
        })
      } else {
        logError("No data or errors")
      }
    })
  }

  unsubscribe() {
    if (this.#subscription) {
      this.#subscription.unsubscribe()
    }
  }

  @action
  async upsertGuide(title: string, maxHoursPerRide: number, type: TransportType): Promise<UpdateGuideResult> {
    if (this.guide) {
      const variables: UpdateGuideMutationVariables = {
        patch: {
          id: this.guide.id,
          maxHoursPerRide,
          type,
          title,
        },
      }
      const { data, errors } = await client.mutate<UpdateGuideMutation>({
        mutation: UpdateGuideDocument,
        variables,
      })

      if (data && data.updateGuide.success) {
        this.#guideId = data.updateGuide.id
        this.subscribe()
      }

      return data.updateGuide
    } else {
      const variables: CreateGuideMutationVariables = {
        input: {
          title,
          maxHoursPerRide,
          type,
        },
      }
      const { data, errors } = await client.mutate<CreateGuideMutation>({
        mutation: CreateGuideDocument,
        variables,
      })

      if (data && data.createGuide.success) {
        this.#guideId = data.createGuide.guideId
        this.subscribe()
      }

      return data.createGuide
    }
  }

}


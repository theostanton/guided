import {
  AddSpotDocument,
  AddSpotInput,
  AddSpotMutation,
  AddSpotMutationVariables,
  CreateGuideDocument,
  CreateGuideMutation,
  CreateGuideMutationVariables,
  CreatingGuideDocument,
  CreatingGuideFragment,
  CreatingGuideStageFragment,
  CreatingGuideSubscription,
  EditStartDateDocument,
  EditStartDateMutation,
  Geocode,
  MutationEditStartDateArgs,
  RemoveSpotDocument,
  RemoveSpotMutation,
  RemoveSpotMutationVariables,
  TransportType,
  UpdateGuideDocument,
  UpdateGuideMutation,
  UpdateGuideMutationVariables,
  UpdateGuideResult,
  UpdateSpotMutation,
  UpdateSpotMutationVariables,
  UpdateSpotResult,
} from "api/generated"
import { action, observable, runInAction } from "mobx"
import randomKey from "utils/randomKey"
import { client } from "api"
import { subscriptionClient } from "api/client"
import { ZenObservable } from "zen-observable-ts/lib/types"
import { log, logError, logJson, logObject } from "utils/logger"

type Stage = "details" | "locations" | "members" | "save"


export type CreateGuideStoreSpot =
  Partial<AddSpotInput>
  & {
  key: string,
  date: string | undefined,
  spotId: string | undefined,
  beginsStage: CreatingGuideStageFragment | undefined
}

export default class CreateGuideStore {

  #guideId: string | undefined

  @observable
  stage: Stage = "details"

  @observable
  guide: CreatingGuideFragment | undefined = undefined

  @observable
  isCircular: boolean

  @observable
  showSpotsErrors: boolean = false

  @observable
  startDate: string | undefined

  @observable
  updatedSpots: number

  @observable
  spots: CreateGuideStoreSpot[] | undefined

  #subscription: ZenObservable.Subscription | undefined

  constructor(guideId: string | undefined) {
    this.#guideId = guideId
    this.spots = [{
      key: randomKey(),
      spotId: undefined,
      nights: 0,
      beginsStage: undefined,
      date: undefined,
    }]
  }

  goToStage(stage: Stage) {
    this.stage = stage
  }

  updateIsCircular(isCircular: boolean) {
    this.isCircular = isCircular
  }

  async updateStartDate(startDate: string | undefined): Promise<boolean> {
    this.startDate = startDate
    const variables: MutationEditStartDateArgs = {
      date: startDate,
      guideId: this.#guideId,
    }
    const result = await client.mutate<EditStartDateMutation>({
      mutation: EditStartDateDocument,
      variables,
    })

    logObject(result, "result")

    return result.data && result.data.editStartDate.success
  }

  validateSpots(): boolean {
    return !this.spots.some(spot => {
      return spot.label === "" || !spot.location || spot.location === ""
    })
  }

  async removeSpot(index: number): Promise<{ success: boolean }> {
    const spot = this.spots[index]
    if (spot.spotId) {
      const variables: RemoveSpotMutationVariables = {
        spotId: spot.spotId,
      }
      try {
        await client.mutate<RemoveSpotMutation>({
          mutation: RemoveSpotDocument,
          variables,
        })
      } catch (e) {
        return {
          success: false,
        }
      }
    }
    this.spots.splice(index, 1)
    return {
      success: true,
    }
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
      spotId: undefined,
      beginsStage: undefined,
      date: undefined,
    })
  }

  @action
  updateSpot(index: number, fields: Partial<AddSpotInput>) {
    // logJson(fields, "updateSpot")
    this.spots[index] = {
      ...this.spots[index],
      ...fields,
    }
  }

  @action
  async updateSpotLocation(index: number, geocode: Geocode): Promise<UpdateSpotResult> {
    const spot = this.spots[index]

    log(spot.spotId, "updateSpotLocation()")

    if (spot.spotId) {
      const variables: UpdateSpotMutationVariables = {
        patch: {
          id: spot.spotId,
          label: spot.label,
          nights: spot.nights,
          location: {
            location: geocode.label,
            country: geocode.countryCode,
            lat: geocode.latitude,
            long: geocode.longitude,
          },
        },
      }
      const result = await client.mutate<UpdateSpotMutation>({
        mutation: AddSpotDocument,
        variables,
      })

      return result.data.updateSpot
    } else {
      const variables: AddSpotMutationVariables = {
        input: {
          country: geocode.countryCode,
          guideId: this.#guideId,
          label: spot.label,
          lat: geocode.latitude,
          location: geocode.label,
          long: geocode.longitude,
          nights: spot.nights,
        },
      }
      const result = await client.mutate<AddSpotMutation>({
        mutation: AddSpotDocument,
        variables,
      })

      this.spots[index].spotId = result.data.addSpot.id
      return result.data.addSpot
    }
  }

  @action
  subscribe() {

    if (!this.#guideId) {
      throw new Error("No guideId")
    }

    if (this.#subscription) {
      this.#subscription.unsubscribe()
    }

    this.#subscription = subscriptionClient.subscribe<CreatingGuideSubscription>({
      query: CreatingGuideDocument,
      variables: {
        id: this.#guideId,
      },
    }).subscribe(value => {
        if (value.data) {
          log("got value.data")
          runInAction(() => {
            this.guide = value.data.guide
            if (this.spots) {
              this.guide.spots.nodes.forEach(spot => {
                const localSpotIndex = this.spots.findIndex(localSpot => {
                  return localSpot.spotId === spot.id
                })
                if (localSpotIndex >= 0) {
                  this.spots[localSpotIndex].beginsStage = spot.beginsStage.nodes[0]
                  this.spots[localSpotIndex].date = spot.date
                }
              })
            } else {
              this.spots = this.guide.spots.nodes.map(spot => {
                return {
                  beginsStage: spot.beginsStage.nodes[0],
                  nights: spot.nights,
                  long: spot.long,
                  location: spot.location,
                  lat: spot.lat,
                  label: spot.label,
                  date: spot.date,
                  country: spot.country,
                  spotId: spot.id,
                  key: randomKey(),
                }
              })
            }
            this.updatedSpots = new Date().getTime()
            logJson(this.spots, "this.spots")
          })
        } else if (value.errors) {
          logError("errors")
          value.errors.forEach(error => {
            logError(error.message)
          })
        } else {
          logError("No data or errors")
        }
      },
    )
  }

  unsubscribe() {
    if (this.#subscription) {
      this.#subscription.unsubscribe()
    }
  }

  hasGuideId(): boolean {
    return !!this.#guideId
  }

  needToUpsert(title: string, maxHoursPerRide: number, type: TransportType): boolean {
    if (!this.guide) {
      return true
    }
    if (this.guide.title !== title) {
      return true
    }
    if (this.guide.maxHoursPerRide !== maxHoursPerRide) {
      return true
    }
    if (this.guide.transportType !== type) {
      return true
    }
    return false
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


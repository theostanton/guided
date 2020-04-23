import {
  AddSpotDocument,
  AddSpotInput,
  AddSpotMutation,
  AddSpotMutationVariables,
  AddSpotResult,
  CreateGuideDocument,
  CreateGuideMutation,
  CreateGuideMutationVariables,
  CreatingGuideDocument,
  CreatingGuideFragment,
  CreatingGuideStageFragment,
  CreatingGuideSubscription,
  Geocode,
  RemoveSpotDocument,
  RemoveSpotMutation,
  RemoveSpotMutationVariables,
  TransportType,
  UpdateGuideDocument,
  UpdateGuideMutation,
  UpdateGuideMutationVariables,
  UpdateGuidePatch,
  UpdateGuideResult,
  UpdateSpotDocument,
  UpdateSpotMutation,
  UpdateSpotMutationVariables,
  UpdateSpotResult,
} from "api/generated"
import { action, observable } from "mobx"
import randomKey from "utils/randomKey"
import { client } from "api"
import { subscriptionClient } from "api/client"
import { ZenObservable } from "zen-observable-ts/lib/types"
import { log, logError, logJson, logObject } from "utils/logger"
import AwesomeDebouncePromise from "awesome-debounce-promise"

type Stage = "details" | "locations" | "members" | "save"

type UpsertGuidePatch = Partial<UpdateGuidePatch>

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
  showSpotsErrors: boolean = false

  @observable
  updatedSpots: number

  @observable
  spots: CreateGuideStoreSpot[] | undefined

  updateSpotRequest = AwesomeDebouncePromise(
    this.executeUpdateSpotRequest.bind(this),
    500,
    {
      accumulate: false,
      onlyResolvesLast: true,
      key: (spotId) => spotId,
    },
  )

  addSpotRequest = AwesomeDebouncePromise(
    this.executeAddSpotRequest.bind(this),
    500,
    {
      accumulate: false,
      onlyResolvesLast: true,
      key: (spotIndex) => spotIndex,
    },
  )


  #subscription: ZenObservable.Subscription | undefined

  constructor(guideId: string | undefined) {
    this.#guideId = guideId
    if (!guideId) {
      this.spots = [{
        key: randomKey(),
        spotId: undefined,
        nights: 0,
        beginsStage: undefined,
        date: undefined,
      }]
    }
  }

  goToStage(stage: Stage) {
    this.stage = stage
  }

  async updateIsCircular(isCircular: boolean): Promise<UpdateGuideResult> {
    return this.upsertGuide({ isCircular })
  }

  async updateStartDate(startDate: string | undefined): Promise<boolean> {
    const result = await this.upsertGuide({ startDate: startDate || "" })
    return result.success
  }

  validateSpots(): boolean {
    return !this.spots.some(spot => {
      return spot.label === "" || !spot.location || spot.location === ""
    })
  }

  async removeSpot(index: number): Promise<{ success: boolean }> {
    const spot = this.spots[index]
    log(`removeSpot() spot.spotId=${spot.spotId}`)
    if (spot.spotId) {
      const variables: RemoveSpotMutationVariables = {
        spotId: spot.spotId,
      }
      try {
        log("call removeSpot")
        await client.mutate<RemoveSpotMutation>({
          mutation: RemoveSpotDocument,
          variables,
        })
      } catch (e) {
        console.error(e)
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
  async updateSpot(index: number, fields: Partial<AddSpotInput>): Promise<UpdateSpotResult> {
    this.spots[index] = {
      ...this.spots[index],
      ...fields,
    }

    const spot = this.spots[index]
    if (spot.spotId) {
      log(`updateSpot() this.spots[${index}] has spotId`)

      // Update spot
      return this.updateSpotRequest(spot.spotId)
    } else if (spot.location) {

      const result = await this.addSpotRequest(index)
      return result
    } else {
      log(`updateSpot() this.spots[${index}] no location`)
      // Dont add spot remotely yet, as we haven't a location
      return {
        success: true,
      }
    }
  }

  async executeAddSpotRequest(spotIndex: number): Promise<AddSpotResult> {
    // Add spot as we have a location
    log(`executeAddSpotRequest() this.spots[${spotIndex}]`)
    const spot = this.spots[spotIndex]
    const variables: AddSpotMutationVariables = {
      input: {
        country: spot.country,
        guideId: this.#guideId,
        label: spot.label,
        lat: spot.lat,
        location: spot.location,
        long: spot.long,
        nights: spot.nights,
      },
    }
    log("call addSpot")
    const result = await client.mutate<AddSpotMutation>({
      mutation: AddSpotDocument,
      variables,
    })

    logObject(result, "result")

    this.spots[spotIndex].spotId = result.data.addSpot.id
    return result.data.addSpot
  }

  async executeUpdateSpotRequest(spotId: string): Promise<UpdateSpotResult> {
    log(`executeUpdateSpotRequest spotId=${spotId}`)
    const spot = this.spots.find(spot => {
      return spot.spotId === spotId
    })

    if (!spotId) {
      return {
        success: false,
        message: `No spot for spotId=${spotId}`,
      }
    }

    if (!spot.location) {
      return {
        success: true,
      }
    }

    const variables: UpdateSpotMutationVariables = {
      patch: {
        id: spot.spotId,
        label: spot.label,
        nights: spot.nights,
        location: {
          location: spot.location,
          country: spot.country,
          lat: spot.lat,
          long: spot.long,
        },
      },
    }

    logObject(variables, "call updateSpot")
    const { data, errors } = await client.mutate<UpdateSpotMutation>({
      mutation: UpdateSpotDocument,
      variables,
    })

    if (errors) {
      return {
        success: false,
        message: errors.map(error => {
          return error.message
        }).join("\n"),
      }
    } else if (data.updateSpot) {
      return data.updateSpot
    } else {
      return {
        success: false,
        message: "Something went very wrong",
      }
    }

  }

  @action
  async updateSpotLocation(index: number, geocode: Geocode): Promise<UpdateSpotResult> {
    const spot = this.spots[index]

    logJson(spot.spotId, "updateSpotLocation() ")
    logJson(geocode, "updateSpotLocation() geocode")

    if (spot.spotId) {
      return this.updateSpot(index, {
        location: geocode.label,
        country: geocode.countryCode,
        lat: geocode.latitude,
        long: geocode.longitude,
      })
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
      log("call addSpot")
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
          logObject(this.spots, "this.spots")
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
  async upsertGuide(input: UpsertGuidePatch): Promise<UpdateGuideResult> {
    if (this.guide) {
      const variables: UpdateGuideMutationVariables = {
        patch: {
          id: this.guide.id,
          title: this.guide.title,
          ...input,
        },
      }
      log("call updateGuide")
      const { data, errors } = await client.mutate<UpdateGuideMutation>({
        mutation: UpdateGuideDocument,
        variables,
      })

      if (data && data.updateGuide.success) {
        logObject(data.updateGuide, "data.updateGuide result")
        this.#guideId = data.updateGuide.id
        this.subscribe()
      } else if (errors) {
        return {
          success: false,
          message: errors.reduce((acc, error) => {
            return `${acc}${acc.length > 0 ? "\n" : ""}'${error.message}`
          }, ""),
        }
      }

      return data.updateGuide
    } else {

      let { maxHoursPerRide, title, isCircular, type } = input
      if (!maxHoursPerRide || !title || !type) {
        return {
          success: false,
          message: "Missing fields",
        }
      }

      const variables: CreateGuideMutationVariables = {
        input: {
          title,
          isCircular,
          maxHoursPerRide,
          type,
        },
      }
      log("call createGuide")
      const { data, errors } = await client.mutate<CreateGuideMutation>({
        mutation: CreateGuideDocument,
        variables,
      })

      if (data && data.createGuide.success) {
        this.#guideId = data.createGuide.guideId
        this.subscribe()
      } else if (errors) {
        return {
          success: false,
          message: errors.reduce((acc, error) => {
            return `${acc}${acc.length > 0 ? "\n" : ""}'${error.message}`
          }, ""),
        }
      }

      return data.createGuide
    }
  }

}


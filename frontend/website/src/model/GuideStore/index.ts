import { action, computed, observable, runInAction } from "mobx"
import {
  GetGuideIdForSlugDocument,
  GetGuideIdForSlugQuery,
  GetGuideIdForSlugQueryVariables,
  GuideFragment,
  GuideStagesDocument,
  GuideStagesSubscription,
  RideFragment,
  SpotFragment,
  StageFragment,
} from "api/generated"
import { log, logError, logObject } from "utils/logger"
import { ZenObservable } from "zen-observable-ts/lib/types"
import client, { subscriptionClient } from "api/client"

export default class GuideStore {

  #guideId: string
  #slug: string

  static fromSlug(slug: string): GuideStore {
    return new GuideStore(undefined, slug)
  }

  static fromId(guideId: string): GuideStore {
    return new GuideStore(guideId, undefined)
  }

  private constructor(guideId: string | undefined, slug: string | undefined) {
    this.#guideId = guideId
    this.#slug = slug
  }

  @observable
  guide: GuideFragment | undefined = undefined

  @observable
  selectedId: string | undefined = undefined

  @observable
  highlightedId: string | undefined = undefined

  #subscription: ZenObservable.Subscription

  @computed
  get selectedSpot(): SpotFragment | undefined {
    if (!this.selectedId) {
      return
    }
    const selectedSpot = this.spots.find(spot => {
      return spot.id === this.selectedId
    })
    if (selectedSpot) {
      return selectedSpot
    }
  }

  @computed
  get selectedType(): "ride" | "spot" | undefined {
    if (this.selectedId?.startsWith("ride")) {
      return "ride"
    }
    if (this.selectedId?.startsWith("spot")) {
      return "spot"
    }
  }

  @computed
  get selectedRide(): RideFragment | undefined {
    if (!this.selectedId) {
      return
    }
    const selectedRide = this.rides.find(ride => {
      return ride.id === this.selectedId
    })
    if (selectedRide) {
      return selectedRide
    }
  }

  @action
  selectRide(rideId: string) {
    this.selectedId = rideId
  }

  @action
  selectSpot(spotId: string) {
    this.selectedId = spotId
    log(this.selectedId, "selectedId")
  }

  @action
  unselect() {
    this.selectedId = undefined
    this.highlightedId = undefined
  }

  @computed
  get spots(): readonly SpotFragment[] {
    if (this.stages.length === 0) {
      if (this.guide.firstSpot.nodes.length === 1) {
        return this.guide.firstSpot.nodes
      } else {
        return []
      }
    }

    const spots: SpotFragment[] = []
    this.stages.forEach(stage => {
      if (stage.status === "READY") {
        stage.ridesByStage.nodes.forEach(ride => {
          spots.push(ride.fromSpot)
        })
      } else {
        spots.push(stage.fromSpot)
      }
    })
    return spots
  }

  @computed
  get rides(): readonly RideFragment[] {
    const rides: RideFragment[] = []
    this.stages.forEach(stage => {
      stage.ridesByStage.nodes.forEach(ride => {
        rides.push(ride)
      })
    })
    return rides
  }

  @computed
  get stages(): readonly StageFragment[] {
    return this.guide!.stages!.nodes!
  }

  @computed
  get highlightedSpot(): SpotFragment | undefined {
    if (!this.highlightedId) {
      return
    }
    const highlightedSpot = this.spots.find(spot => {
      return spot.id === this.highlightedId
    })
    if (highlightedSpot) {
      return highlightedSpot
    }
  }

  @computed
  get highlightedRide(): RideFragment | undefined {
    if (!this.highlightedId) {
      return
    }
    const highlightedRide = this.rides.find(ride => {
      return ride.id === this.highlightedId
    })
    if (highlightedRide) {
      return highlightedRide
    }
  }

  @action
  highlightRide(rideId: string) {
    this.highlightedId = rideId
  }

  @action
  highlightSpot(spotId: string) {
    this.highlightedId = spotId
  }

  @action
  unhighlight() {
    this.highlightedId = undefined
  }

  async subscribe() {

    if (!this.#guideId) {

      const variables: GetGuideIdForSlugQueryVariables = {
        slug: this.#slug,
      }

      const response = await client.query<GetGuideIdForSlugQuery>({
        query: GetGuideIdForSlugDocument,
        variables,
      })

      logObject(response, "response")

      this.#guideId = response.data.guides!.nodes[0].id
    }

    this.#subscription = subscriptionClient.subscribe<GuideStagesSubscription>({
      query: GuideStagesDocument,
      fetchPolicy: "network-only",
      variables: {
        id: this.#guideId,
      },
    }).subscribe(value => {
      if (value.data) {
        logObject(value.data, "value.data!")
        const guide = value.data.guide
        this.updateGuide(guide)
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

  updateGuide(guide: GuideFragment) {
    runInAction(() => {
      this.guide = guide
    })
  }

  unsubscribe() {
    this.#subscription?.unsubscribe()
    this.guide = undefined
  }
}
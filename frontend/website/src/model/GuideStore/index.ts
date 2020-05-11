import { action, computed, observable, runInAction } from "mobx"
import {
  GuideFragment,
  GuideStagesDocument, GuideStagesPublicDocument, GuideStagesPublicQuery,
  GuideStagesSubscription,
  RideFragment,
  SpotFragment,
  StageFragment,
} from "api/generated"
import { log, logError } from "utils/logger"
import { ZenObservable } from "zen-observable-ts/lib/types"
import { subscriptionClient } from "api/client"
import client from "api/client"
import { FetchResult } from "apollo-boost"
import { RideColourStatus, SpotColourStatus } from "utils/colours"

export default class GuideStore {

  #guideId: string
  #isOwner: boolean

  static fromSlug(owner: string, slug: string, self: string | undefined): GuideStore {
    return new GuideStore(`${owner}_${slug}`, !!self && self === owner)
  }

  static fromId(guideId: string, self: string | undefined): GuideStore {
    const owner = guideId.split("_")[0]
    return new GuideStore(guideId, !!self && self === owner)
  }

  private constructor(guideId: string, isOwner: boolean) {
    this.#guideId = guideId
    this.#isOwner = isOwner
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
  get highlightedType(): "ride" | "spot" | undefined {
    if (this.highlightedId?.startsWith("ride")) {
      return "ride"
    }
    if (this.highlightedId?.startsWith("spot")) {
      return "spot"
    }
  }

  get isOwner(): boolean {
    return this.#isOwner
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

  rideStatus(rideId: string): RideColourStatus {
    switch (rideId) {
      case this.highlightedId:
        return "highlighted"
      case this.selectedId:
        return "selected"
    }
    if (this.highlightedId || this.selectedId) {
      return "dim"
    } else {
      return "none"
    }
  }

  spotStatus(spotId: string): SpotColourStatus | undefined {
    if (this.highlightedType === "spot" || this.selectedType === "spot") {
      switch (spotId) {
        case this.highlightedId:
          return "highlighted"
        case this.selectedId:
          return "selected"
        default:
          return "dim"
      }
    }

    const ride = this.highlightedRide || this.selectedRide
    if (ride) {
      switch (spotId) {
        case ride.fromSpot.id:
          return "start"
        case ride.toSpot.id:
          return "end"
        default:
          return "dim"
      }
    }

    return "none"
  }

  @computed
  get highlightedRide(): RideFragment | undefined {
    if (!this.highlightedId) {
      returngi
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

    if (this.isOwner) {
      this.#subscription = subscriptionClient.subscribe<GuideStagesSubscription>({
        query: GuideStagesDocument,
        fetchPolicy: "network-only",
        variables: {
          id: this.#guideId,
        },
      }).subscribe(value => {
        if (value.data) {
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
    } else {
      const result = await client.query<GuideStagesPublicQuery>({
        query: GuideStagesPublicDocument,
        variables: {
          id: this.#guideId,
        },
      })
      if (result.data) {
        const guide = result.data.guide
        this.updateGuide(guide)
      } else if (result.errors) {
        logError("errors")
        result.errors.forEach(error => {
          logError(error.message)
        })
      } else {
        logError("No data or errors")
      }
    }
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
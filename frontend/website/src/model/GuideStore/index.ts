import { action, computed, observable, runInAction } from "mobx"
import {
  GetGuideBySlugDocument, GetGuideBySlugSubscription, GetGuideBySlugSubscriptionResult,
  GetGuideBySlugSubscriptionVariables, Guide, GuideBySlugFragment, RideByGuideFragment, SpotByGuideFragment,
} from "api/generated"
import { log, logJson, logObject } from "utils/logger"
import { ZenObservable } from "zen-observable-ts/lib/types"
import { subscriptionClient } from "../../api/client"
import { logError } from "../../../../../backend/tools/logger/src"

export default class GuideStore {

  #slug: string
  #owner: string
  #poll: NodeJS.Timeout | undefined

  constructor(slug: string, owner: string) {
    this.#slug = slug
    this.#owner = owner
  }

  @observable
  guide: GuideBySlugFragment | undefined = undefined

  @observable
  selectedId: string | undefined = undefined

  @observable
  highlightedId: string | undefined = undefined

  #subscription: ZenObservable.Subscription

  @computed
  get selectedSpot(): SpotByGuideFragment | undefined {
    if (!this.selectedId) {
      return
    }
    const selectedSpot = this.guide?.spotsByGuide?.nodes?.find(node => {
      return node?.id === this.selectedId
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
  get selectedRide(): RideByGuideFragment | undefined {
    if (!this.selectedId) {
      return
    }
    const selectedRide = this.guide?.ridesByGuide?.nodes?.find(node => {
      return node?.id === this.selectedId
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
  get spots(): SpotByGuideFragment[] {
    return this.guide?.spotsByGuide!.nodes!.map(spot => {
      return spot!
    })
  }

  @computed
  get rides(): RideByGuideFragment[] {
    return this.guide?.ridesByGuide!.nodes!.map(ride => {
      return ride!
    })
  }

  @computed
  get highlightedSpot(): SpotByGuideFragment | undefined {
    if (!this.highlightedId) {
      return
    }
    const highlightedSpot = this.guide?.spotsByGuide?.nodes?.find(node => {
      return node?.id === this.highlightedId
    })
    if (highlightedSpot) {
      return highlightedSpot
    }
  }

  @computed
  get highlightedRide(): RideByGuideFragment | undefined {
    if (!this.highlightedId) {
      return
    }
    const highlightedRide = this.guide?.ridesByGuide?.nodes?.find(node => {
      return node?.id === this.highlightedId
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

  subscribe() {

    const variables: GetGuideBySlugSubscriptionVariables = {
      owner: this.#owner,
      slug: this.#slug,
    }

    this.#subscription = subscriptionClient.subscribe<GetGuideBySlugSubscription>({
      query: GetGuideBySlugDocument,
      fetchPolicy: "network-only",
      variables,
    }).subscribe(value => {
      if (value.data) {
        logObject(value.data, "value.data")
        const guide = value.data.guides.nodes[0]
        this.updateGuide(guide)
      } else if (value.errors) {
        console.error("errors")
        value.errors.forEach(error => {
          logError(error)
        })
      } else {
        logError("No data or errors")
      }
    })
  }

  updateGuide(guide: GuideBySlugFragment) {
    logJson(guide, "updateGuide(guide)")
    runInAction(() => {
      this.guide = guide
    })
  }

  refetch(): void {

  }

  unsubscribe() {
    this.#subscription?.unsubscribe()
    this.guide = undefined
  }
}
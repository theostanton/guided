import { action, computed, observable, runInAction } from "mobx"
import {
  GetGuideBySlugDocument,
  GetGuideBySlugQuery,
  GetGuideBySlugQueryVariables, Guide, GuideBySlugFragment, RideByGuideFragment, SpotByGuideFragment,
} from "api/generated"
import { client } from "api"
import { log } from "utils/logger"

export default class GuideStore {

  @observable
  guide: GuideBySlugFragment | undefined = undefined

  @observable
  selectedId: string | undefined = undefined

  @observable
  highlightedId: string | undefined = undefined

  #subscription: any

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

  subscribe(slug: string, owner: string) {


    // TODO subscription
    // const variables: OnUpdateGuideSubscriptionVariables = {
    //   owner,
    // }
    // this.subscription = API.graphql(
    //   graphqlOperation(GQL.Subscriptions.OnUpdateGuide, variables),
    // ).subscribe({
    //   next: async () => {
    //     await this.fetch(slug, owner)
    //   },
    // })

    this.fetch(slug, owner).then()
  }

  refetch(): void {
    if (this.guide) {
      this.fetch(this.guide.slug!, this.guide.owner!).then()
    } else {
      throw new Error(`Trying to refetch but have no guide`)
    }
  }

  private async fetch(slug: string, owner: string): Promise<void> {
    const variables: GetGuideBySlugQueryVariables = {
      slug,
      owner,
    }

    const { data } = await client.query<GetGuideBySlugQuery>({
      query: GetGuideBySlugDocument,
      variables,
    })
    const guide = data!.guides!.nodes![0]!

    runInAction(() => {
      this.guide = guide
    })


    if (guide.stagesByGuide.totalCount > 0) {
      log("Polling")
      setTimeout(() => {
        if (this.guide) {
          log("Polled")
          this.fetch(this.guide.slug, owner)
        }
      }, 2000)

    }

  }

  unsubscribe() {
    this.#subscription?.unsubscribe()
    this.guide = undefined
  }
}

const guideStore = new GuideStore()
export {
  guideStore,
}
import { action, computed, observable, runInAction } from "mobx"
import {
  GetGuideBySlugDocument,
  GetGuideBySlugQuery,
  GetGuideBySlugQueryVariables, Guide, GuideBySlugFragment, RideByGuideFragment, SpotByGuideFragment,
} from "api/generated"
import { client } from "api"
import { log } from "@guided/logger"

export default class GuideStore {

  @observable
  guide: GuideBySlugFragment | undefined = undefined

  @observable
  selectedId: string | undefined = undefined

  private subscription: any

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

  async fetch(slug: string, owner: string): Promise<void> {
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
  }

  unsubscribe() {
    this.subscription?.unsubscribe()
    this.guide = undefined
  }
}

const guideStore = new GuideStore()
export {
  guideStore,
}
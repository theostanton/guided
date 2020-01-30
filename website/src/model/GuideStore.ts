import { observable, runInAction } from "mobx"
import { client } from "api"
import {
  GetGuideBySlugDocument,
  GetGuideBySlugQuery,
  GetGuideBySlugQueryVariables,
} from "api/generated"
import { Guide } from "model"

export default class GuideStore {

  @observable
  guide: Guide | undefined = undefined

  private subscription: any

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

  private async fetch(slug: string, owner: string): Promise<void> {

    console.log("fetching")
    const variables: GetGuideBySlugQueryVariables = {
      slug,
      owner,
    }

    const { data } = await client.query<GetGuideBySlugQuery>({
      query: GetGuideBySlugDocument,
      variables,
    })
    const guide = data!.allGuides!.nodes![0]!
    runInAction(() => {
      console.log("fetched")
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
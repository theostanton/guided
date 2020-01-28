import { observable, action, computed, reaction, runInAction } from "mobx"
import { Guide } from "utils/types"
import * as GQL from "api"
import { API, graphqlOperation } from "aws-amplify"
import { OnUpdateGuideSubscriptionVariables } from "../api/generated"

export default class GuideStore {

  @observable
  guide: Guide | undefined

  private subscription: any

  subscribe(slug: string, owner: string) {

    const variables: OnUpdateGuideSubscriptionVariables = {
      owner,
    }
    this.subscription = API.graphql(
      graphqlOperation(GQL.Subscriptions.OnUpdateGuide, variables),
    ).subscribe({
      next: async () => {
        await this.fetch(slug, owner)
      },
    })

    this.fetch(slug, owner).then()
  }

  private async fetch(slug: string, owner: string): Promise<void> {
    const variables: GQL.Generated.GetGuideBySlugQueryVariables = {
      slug,
      owner,
    }
    console.log("variables")
    console.log(variables)
    const response: { data: GQL.Generated.GetGuideBySlugQuery } = await API.graphql(graphqlOperation(GQL.Queries.GetGuideBySlug, variables))
    const guide = response.data.listGuides!.items![0]! as Guide
    console.log("response guide=")
    console.log(response)
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
console.log("init guideStore")
export {
  guideStore,
}
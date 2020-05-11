import { action, observable, runInAction } from "mobx"
import {
  GuideInfoFragment,
  GuidesListDocument, GuidesListQuery,
  GuidesListQueryVariables,
} from "../../api/generated"
import client from "../../api/client"

export default class GuidesStore {

  owner: string

  @observable
  guides: GuideInfoFragment[] | undefined

  constructor(owner: string) {
    this.owner = owner
  }

  @action
  async subscribe() {
    const variables: GuidesListQueryVariables = {
      owner: this.owner,
    }
    const result = await client.query<GuidesListQuery>({
      query: GuidesListDocument,
      variables,
    })

    this.guides = result.data?.guides?.nodes.map(node => node!)
  }

  unsubscribe() {
  }
}
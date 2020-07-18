import { action, observable, runInAction } from "mobx"
import { UserProfileDocument, UserProfileFragment, UserProfileQuery } from "api/generated"
import client from "api/client"

export default class ProfileStore {

  username: string

  @observable
  user: UserProfileFragment | undefined

  constructor(username: string) {
    this.username = username
  }

  @action
  async fetch() {
    const response = await client.query<UserProfileQuery>({
      query: UserProfileDocument,
      variables: {
        username: this.username,
      },
    })

    if (response.data) {
      this.user = response.data.user!
    }
  }
}
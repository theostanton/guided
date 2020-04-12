import { observable, action, computed, runInAction } from "mobx"
import store from "store"
import {
  GetUsernameDocument, GetUsernameQuery, GetUsernameQueryVariables,
  LoginDocument,
  LoginMutation,
  LoginMutationVariables, SignUpDocument, SignUpMutation,
  SignUpMutationVariables,
} from "api/generated"
import { USER_KEY } from "api/client"
import { client } from "api"
import { logJson } from "utils/logger"

export type User = {
  bearerToken: string
  username?: string
  email: string
}

export default class Index {

  @observable
  user: User | undefined

  constructor() {
    const value = store.get(USER_KEY)
    if (value) {
      this.user = JSON.parse(value) as User
    }
  }

  @computed
  get isLoggedIn(): boolean {
    return this.user !== undefined
  }

  @computed
  get owner(): string | undefined {
    if (this.isLoggedIn) {
      return this.user?.username!
    }
  }

  async login(email: string, password: string): Promise<void> {
    const variables: LoginMutationVariables = {
      email,
      password,
    }
    const result = await client.mutate<LoginMutation>({
      mutation: LoginDocument,
      variables,
    })

    const bearerToken = result.data!.authenticate!.jwtToken

    this.setUser({
      email,
      bearerToken,
    })

    const usernameResult = await client.query<GetUsernameQuery>({
        query: GetUsernameDocument,
        variables: {
          email,
        } as GetUsernameQueryVariables,
      },
    )

    const username = usernameResult.data!.users!.nodes[0]!.username

    this.setUser({
      username,
      email,
      bearerToken,
    })

  }

  async signUp(username: string, email: string, password: string): Promise<void> {
    const variables: SignUpMutationVariables = {
      username,
      email,
      password,
    }
    await client.mutate<SignUpMutation>({
      mutation: SignUpDocument,
      variables,
    })

    await this.login(email, password)
  }

  setUser(user: User | undefined) {
    if (user) {
      store.set(USER_KEY, JSON.stringify(user, null, 4))
    } else {
      store.set(USER_KEY, undefined)
    }
    runInAction(() => {
      this.user = user
    })
  }

  logOut() {
    this.setUser(undefined)
  }
}

const authStore = new Index()
export {
  authStore,
}
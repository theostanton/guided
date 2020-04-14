import { observable, action, computed, runInAction } from "mobx"
import store from "store"
import {
  Colour,
  GetUsernameDocument, GetUsernameQuery, GetUsernameQueryVariables,
  LoginDocument,
  LoginMutation,
  LoginMutationVariables, SignUpDocument, SignUpMutation,
  SignUpMutationVariables,
} from "api/generated"
import { USER_KEY } from "api/client"
import { client } from "api"
import { logError } from "utils/logger"

export type User = {
  bearerToken: string
  username?: string
  colour?: Colour
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

  @computed
  get colour(): string | undefined {
    if (this.isLoggedIn) {
      return this.user?.colour!
    }
  }

  async login(email: string, password: string): Promise<{
    success: boolean
    message?: string
  }> {
    const variables: LoginMutationVariables = {
      email,
      password,
    }
    const result = await client.mutate<LoginMutation>({
      mutation: LoginDocument,
      variables,
    })

    if (result.errors && result.errors.length > 0) {
      logError("LoginMutation error")
      result.errors.forEach(error => {
        logError(error.message)
      })
      return {
        success: false,
        message: result.errors.map(error => {
          return error.message
        }).join("\n"),
      }
    }

    if (!result.data.authenticate?.jwtToken) {
      return {
        success: false,
        message: "Failed to login",
      }
    }

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

    if (usernameResult.errors && usernameResult.errors.length > 0) {
      logError("GetUsername error")
      usernameResult.errors.forEach(error => {
        logError(error.message)
      })

      this.setUser(undefined)
      return {
        success: false,
        message: result.errors.map(error => {
          return error.message
        }).join("\n"),
      }
    }

    const { colour, username } = usernameResult.data!.users!.nodes[0]!

    this.setUser({
      username,
      email,
      bearerToken,
      colour,
    })

    return {
      success: true,
    }

  }


  async signUp(username: string, email: string, password: string): Promise<{ success: boolean, message?: string }> {
    const variables: SignUpMutationVariables = {
      username,
      email,
      password,
    }
    const result = await client.mutate<SignUpMutation>({
      mutation: SignUpDocument,
      variables,
    })

    if (result.errors && result.errors.length > 0) {
      return {
        success: false,
        message: result.errors.map(error => {
          return error.message
        }).join("\n"),
      }
    }

    return this.login(email, password)
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

  @action
  logOut() {
    this.setUser(undefined)
  }
}

const
  authStore = new Index()
export {
  authStore
  ,
}
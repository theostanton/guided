import { observable, action, computed } from "mobx"
import Auth from "@aws-amplify/auth"
import Amplify from "aws-amplify"
import config from "../aws-exports"

Amplify.configure(config)


export type User = {
  userId: string
  username: string
  email: string
}

export default class AuthStore {

  @observable
  user: User | undefined

  @observable
  initiating: boolean = true

  @computed
  get isLoggedIn(): boolean {
    return this.user !== undefined
  }

  @computed
  get owner(): string {
    if (this.isLoggedIn) {
      return this.user?.userId!
    }
    throw new Error("AuthStore.owner - not logged in")
  }

  @action
  async init(): Promise<void> {
    try {
      const authenticatedUser = await Auth.currentAuthenticatedUser()
      this.user = {
        userId: authenticatedUser.username,
        username: authenticatedUser.attributes["custom:username"],
        email: authenticatedUser.attributes.email,
      }
    } catch (e) {
      console.error("AuthStore.init error")
      console.error(e)
    } finally {
      this.initiating = false
    }
  }

  async login(username: string, password: string): Promise<void> {
    await Auth.signIn({ username, password })
    await this.init()
  }

  async signUp(username: string, email: string, password: string): Promise<void> {
    const signUpResult = await Auth.signUp({
      username: email,
      password,
      attributes: { "custom:username": username, email },
    })
    await this.init()
  }

  async confirmSignUp(email: string, code: string): Promise<void> {
    const result = await Auth.confirmSignUp(email, code)
    console.log("AuthStore.confirmSignUp")
    console.log(result)
  }

  @action
  logOut() {
    this.user = undefined
    Auth.signOut().then(() => {
      console.log("Auth.logOut done")
    })
  }
}

const authStore = new AuthStore()
console.log("init authStore")
export {
  authStore,
}
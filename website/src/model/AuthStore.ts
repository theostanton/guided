import { observable, action, computed } from "mobx"

export type User = {
  username: string
  email: string
}

export default class AuthStore {

  @observable
  user: User | undefined

  @observable
  initiating: boolean = true

  get isLoggedIn(): boolean {
    return this.user !== undefined
  }

  @computed
  get owner(): string {
    if (this.isLoggedIn) {
      return this.user?.username!
    }
    throw new Error("AuthStore.owner - not logged in")
  }

  @action
  async init(): Promise<void> {
    try {
      this.user = {
        username: "theo",
        email: "theo@theo.dev",
      }
    } catch (e) {
      console.error("AuthStore.init error")
      console.error(e)
    } finally {
      this.initiating = false
    }
  }

  async login(username: string, password: string): Promise<void> {
    await this.init()
  }

  async signUp(username: string, email: string, password: string): Promise<void> {
    await this.init()
  }

  async confirmSignUp(email: string, code: string): Promise<void> {
  }

  @action
  logOut() {
    this.user = undefined
  }
}

const authStore = new AuthStore()
export {
  authStore,
}
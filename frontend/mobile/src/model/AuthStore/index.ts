import { action, computed, observable, runInAction } from "mobx"
import { AsyncStorage } from "react-native"

const USER_KEY = "guidedUser"

export type User = {
  bearerToken: string
  username?: string
  email: string
}

export default class AuthStore {

  @observable
  user: User | undefined

  constructor() {
    AsyncStorage.getItem(USER_KEY).then(value => {
      if (value) {
        runInAction(() => {
          this.user = JSON.parse(value) as User
        })
      }
    })
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

  async setUser(user: User | undefined) {
    if (user) {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(user, null, 4))
    } else {
      await AsyncStorage.removeItem(USER_KEY)
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

const authStore = new AuthStore()

export {
  authStore,
}
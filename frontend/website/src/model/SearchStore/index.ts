import { observable } from "mobx"
import {
  AvailableCountriesDocument,
  AvailableCountriesQuery,
  GuideInfoFragment,
  RideFragment,
  UserInfoFragment,
} from "api/generated"
import AwesomeDebouncePromise from "awesome-debounce-promise"
import { searchGuides, searchRides, searchUsers } from "./execute"
import { log, logJson } from "../../utils/logger"
import { COUNTRIES } from "../../utils/human"
import { client } from "../../api"

export type SearchType = "users" | "guides" | "rides" | undefined

interface Contents<T> {
  items: Readonly<T[]>
  totalCount: number
  currentPage: number
  perPage: number
}

type ResultStatus = "loading" | "complete" | "none" | "error"

export class Result<T> {

  #perPage: number

  status: ResultStatus
  contents: Contents<T> | undefined
  error: string | undefined

  static none<T>(): Result<T> {
    return new Result<T>(undefined, undefined, false)
  }

  static loading<T>(prevContents: Contents<T> | undefined): Result<T> {
    return new Result(undefined, prevContents, true)
  }

  static error<T>(message: string): Result<T> {
    return new Result({ message }, undefined, false)
  }

  static success<T>(items: Readonly<T[]>, currentPage: number, totalCount: number, perPage: number): Result<T> {
    return new Result(undefined, {
      currentPage,
      items,
      totalCount,
      perPage,
    }, false)
  }

  private constructor(error: { message: string } | undefined, contents: Contents<T> | undefined, loading: boolean) {
    if (loading) {
      this.status = "loading"
      this.error = undefined
      this.contents = contents
    } else if (error) {
      this.status = "error"
      this.error = error.message
    } else if (contents) {
      this.status = "complete"
      this.contents = contents
    } else {
      this.status = "none"
    }
  }

  get totalPages(): number | undefined {
    return this.contents && Math.ceil(this.contents.totalCount / this.#perPage)
  }
}

export default class SearchStore {

  private fetch = AwesomeDebouncePromise(
    this.executeFetch.bind(this),
    500,
    {
      accumulate: false,
      onlyResolvesLast: true,
    },
  )

  @observable
  type: SearchType

  @observable
  contentQuery: string = ""

  @observable
  countryCodes: string[] = []

  @observable
  availableCountryCodes: string[]

  @observable
  loading: {
    query: boolean
    type: boolean
    countries: boolean
    page: boolean
  }

  @observable
  currentPage: number

  @observable
  pageSizes: { [type in SearchType]: number } = {
    guides: 8,
    rides: 8,
    users: 20,
  }

  @observable
  results: {
    guides: Result<GuideInfoFragment>
    rides: Result<RideFragment>
    users: Result<UserInfoFragment>
  } = {
    guides: Result.loading(undefined),
    rides: Result.loading(undefined),
    users: Result.loading(undefined),
  }

  constructor(type: SearchType = "guides") {
    this.type = type
    this.currentPage = 0
    this.loading = {
      countries: false,
      type: false,
      query: false,
      page: false,
    }
    this.availableCountryCodes = Object.keys(COUNTRIES)
  }

  async updateContentQuery(contentQuery: string) {
    this.contentQuery = contentQuery
    this.currentPage = 0
    this.loading.query = true
    await this.fetch()
  }

  async updateCountries(countryCodes: string[]) {
    this.countryCodes = countryCodes
    this.currentPage = 0
    this.loading.countries = true
    await this.fetch()
  }

  async updateCurrentPage(currentPage: number) {
    logJson(currentPage, "currentPage")
    this.currentPage = currentPage
    this.loading.page = true
    await this.fetch()
  }


  async updateType(type: SearchType | "all") {
    this.currentPage = 0
    this.type = type === "all" ? undefined : type
    this.loading.type = true
    await this.fetch()
  }

  async refetch() {
    await this.fetch()
    await this.fetchCountries()
  }

  async fetchCountries() {
    this.loading.countries = true
    const countriesResult = await client.query<AvailableCountriesQuery>({
      query: AvailableCountriesDocument,
    })
    this.availableCountryCodes = countriesResult.data.countries.map(code => {
      return code!
    })
    this.loading.countries = false
  }

  clearLoading() {
    this.loading = {
      countries: false,
      type: false,
      query: false,
      page: false,
    }
  }

  async executeFetchGuides() {
    this.results.guides = Result.loading(this.results.guides.contents)
    this.results.guides = await searchGuides({
      pageSize: this.pageSizes.guides,
      offset: this.currentPage,
      query: `%${this.contentQuery}%`,
      countries: this.countryCodes,
    })
  }

  async executeFetchRides() {
    this.results.rides = Result.loading(this.results.rides.contents)
    this.results.rides = await searchRides({
      pageSize: this.pageSizes.rides,
      offset: this.currentPage,
      query: `%${this.contentQuery}%`,
      countries: this.countryCodes,
    })
  }


  async executeFetchUsers() {
    this.results.users = Result.loading(this.results.users.contents)
    this.results.users = await searchUsers({
      pageSize: this.pageSizes.users,
      offset: this.currentPage,
      query: `%${this.contentQuery}%`,
      countries: this.countryCodes,
    })
  }

  private async executeFetch(): Promise<void> {


    log(`executeFetch type=${this.type}`)
    switch (this.type) {
      case "guides":
        await this.executeFetchGuides()
        break
      case "rides":
        await this.executeFetchRides()
        break
      case "users":
        await this.executeFetchUsers()
        break
      default:
        await Promise.all(
          [this.executeFetchGuides(), this.executeFetchUsers(), this.executeFetchRides()],
        )

    }
    this.clearLoading()
  }


}

export const searchStore = new SearchStore()
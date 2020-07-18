import { Geocode, GeocodeDocument, GeocodeQuery } from "api/generated"
import { observable } from "mobx"
import AwesomeDebouncePromise from "awesome-debounce-promise"
import { ApolloQueryResult } from "apollo-boost"
import { client } from "../../../../api"

type Result = {
  query?: string
  error?: string
  status: "loading" | "error" | "success" | "clear"
  geocodes?: Geocode[]
}

export class GeocodesStore {

  @observable
  result: Result

  #results: { [query in string]: Geocode[] } = {}

  // private request = AwesomeDebouncePromise(
  //   this.executeRequest.bind(this),
  //   200,
  //   {
  //     accumulate: false,
  //     onlyResolvesLast: true,
  //   },
  // )

  constructor() {
    this.result = {
      status: "clear",
    }
  }

  clear() {
    this.result = {
      status: "clear",
    }
  }


}
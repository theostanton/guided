import { ApolloClient, HttpLink, InMemoryCache, DefaultOptions } from "apollo-boost"
import { setContext } from "apollo-link-context"
import fetch from "node-fetch"
import store from "store"
import { User } from "../model/AuthStore"

export const USER_KEY = "guidedUser"

const link = new HttpLink({
  // uri: "http://0.0.0.0:5000/graphql",
  uri: "https://n5r6z11xp4.execute-api.eu-west-2.amazonaws.com/staging/graphql",
// @ts-ignore
  fetch: fetch,
})


const authLink = setContext((_, { headers }) => {

  try {
    const value = store.get(USER_KEY)
    if (value) {
      const user = JSON.parse(value) as User
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${user.bearerToken}`,
        },
      }
    }
  } catch (e) {
    console.error(e)
  }
  return {
    headers,
  }
})

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
}

export default new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
  defaultOptions,
})
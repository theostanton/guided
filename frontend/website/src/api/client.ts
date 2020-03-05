import { ApolloClient, HttpLink, InMemoryCache, DefaultOptions } from "apollo-boost"
import { setContext } from "apollo-link-context"
import fetch from "node-fetch"
import store from "store"
import { User } from "../model/AuthStore"

export const USER_KEY = "guidedUser"

if (!process.env.GATSBY_GUIDED_GRAPHQL) {
  throw new Error(`Requires GATSBY_GUIDED_GRAPHQL`)
} else {
  console.log("process.env.GATSBY_GUIDED_GRAPHQL=" + process.env.GATSBY_GUIDED_GRAPHQL)
}

const link = new HttpLink({
  uri: process.env.GATSBY_GUIDED_GRAPHQL,
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
    errorPolicy: "all",
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
import { ApolloClient, HttpLink, InMemoryCache, Operation } from "apollo-boost"
import { setContext } from "apollo-link-context"
import fetch from "node-fetch"
import store from "store"
import { User } from "../model/AuthStore"

export const USER_KEY = "guidedUser"

const link = new HttpLink({
  uri: "http://0.0.0.0:5000/graphql",
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

export default new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
})
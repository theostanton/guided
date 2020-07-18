import { ApolloClient, HttpLink, InMemoryCache, DefaultOptions, ApolloLink } from "apollo-boost"
import { setContext } from "apollo-link-context"
import fetch from "node-fetch"
import store from "store"
import { User } from "../model/AuthStore"
import { SubscriptionClient } from "subscriptions-transport-ws"
import ws from "ws"
import { WebSocketLink } from "apollo-link-ws"


function httpLink(): ApolloLink {


  if(!process.env.GATSBY_GUIDED_GRAPHQL){
    throw new Error('No process.env.GATSBY_GUIDED_GRAPHQL provided')
  }

  return new HttpLink({
    uri: process.env.GATSBY_GUIDED_GRAPHQL,
// @ts-ignore
    fetch: fetch,
  })
}

function authLink(): ApolloLink {

  return setContext((_, { headers }) => {

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
}

function subscriptionLink(): ApolloLink {

  if(!process.env.GATSBY_GUIDED_WEBSOCKET){
    throw new Error('No process.env.GATSBY_GUIDED_WEBSOCKET provided')
  }

  const wsForNode = typeof window === "undefined" ? ws : null
  const wsClient = new SubscriptionClient(
    process.env.GATSBY_GUIDED_WEBSOCKET,
    {
      reconnect: true,

    },
    wsForNode)

  return new WebSocketLink(wsClient)
}

export const USER_KEY = "guidedUser"

if (!process.env.GATSBY_GUIDED_GRAPHQL) {
  throw new Error(`Requires GATSBY_GUIDED_GRAPHQL`)
}
if (!process.env.GATSBY_GUIDED_WEBSOCKET) {
  throw new Error(`Requires GATSBY_GUIDED_WEBSOCKET`)
}


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

export const subscriptionClient = new ApolloClient(
  {
    connectToDevTools: true,
    //TODO can't send custom headers on websocket, so cant auth via postgraphile expected method
    link: subscriptionLink(),
    cache: new InMemoryCache(),
    defaultOptions,
  })

export default new ApolloClient(
  {
    connectToDevTools: true,
    link: authLink().concat(httpLink()),
    cache: new InMemoryCache(),
    defaultOptions,
  })
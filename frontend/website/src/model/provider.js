import React from "react"
import { Provider } from "mobx-react"
import { authStore } from "./AuthStore"
import { log } from "utils/logger"
import { client } from "../api"
import { ApolloProvider } from "@apollo/react-hooks"

export default function({ element }) {
  log(`provider() authStore=${authStore}`)
  return (
    <ApolloProvider client={client}>
      <Provider authStore={authStore}>{element}</Provider>
    </ApolloProvider>
  )
}
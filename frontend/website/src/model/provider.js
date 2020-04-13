import React from "react"
import { Provider } from "mobx-react"
import { authStore } from "./AuthStore"
import { overlayStore } from "./OverlayStore"
import { client } from "../api"
import { ApolloProvider } from "@apollo/react-hooks"

export default function({ element }) {
  return (
    <ApolloProvider client={client}>
      <Provider authStore={authStore} overlayStore={overlayStore}>{element}</Provider>
    </ApolloProvider>
  )
}
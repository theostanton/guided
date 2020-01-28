import React from "react"
import { Provider } from "mobx-react"
import { authStore } from "./AuthStore"

export default ({ element }) => (
  <Provider authStore={authStore}>{element}</Provider>
)
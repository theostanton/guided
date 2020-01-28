import React from "react"
import { Provider } from "mobx-react"

import { authStore } from "./src/models/AuthStore"

export default function({ element }) {
  return (
    <Provider authStore={authStore}>{element}</Provider>
  )
}
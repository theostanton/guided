import React from "react"
import { Provider } from "mobx-react"
import { authStore } from "./AuthStore"
import { log } from "utils/logger"

export default function({ element }) {
  log(`provider() authStore=${authStore}`)
  return (
    <Provider authStore={authStore}>{element}</Provider>
  )
}
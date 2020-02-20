import React from "react"
import { Provider } from "mobx-react"
import { authStore } from "./AuthStore"
import { guideStore } from "./GuideStore"
import { log } from "utils/logger"

export default function({ element }) {
  log(`provider() authStore=${authStore}`)
  return (
    <Provider authStore={authStore} guideStore={guideStore}>{element}</Provider>
  )
}
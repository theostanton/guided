import React from "react"
import { Provider } from "mobx-react"
import { authStore } from "./AuthStore"
import { guideStore } from "./GuideStore"

export default ({ element }) => (
  <Provider authStore={authStore} guideStore={guideStore}>{element}</Provider>
)
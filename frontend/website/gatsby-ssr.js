import React from "react"
import { authStore } from "./src/model/AuthStore"
import { guideStore } from "./src/model/GuideStore"
import { Provider, useStaticRendering } from "mobx-react"
import { renderToString } from "react-dom/server"
import { log } from "@guided/logger"

useStaticRendering(true)

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  log("replaceRenderer")
  const ProviderBody = () => (
    <Provider authStore={authStore} guideStore={guideStore}>{bodyComponent}</Provider>
  )
  replaceBodyHTMLString(renderToString(<ProviderBody/>))
}
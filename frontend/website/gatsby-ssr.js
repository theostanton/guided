import React from "react"
import { authStore } from "./src/model/AuthStore"
import { guideStore } from "./src/model/GuideStore"
import { Provider, useStaticRendering } from "mobx-react"
import { renderToString } from "react-dom/server"

useStaticRendering(true)

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ProviderBody = () => (
    <Provider authStore={authStore} guideStore={guideStore}>{bodyComponent}</Provider>
  )
  replaceBodyHTMLString(renderToString(<ProviderBody/>))
}
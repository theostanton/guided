import React from "react"
import { authStore } from "./src/models/AuthStore"
import { Provider, useStaticRendering } from "mobx-react"
import { renderToString } from "react-dom/server"

useStaticRendering(true)

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ProviderBody = () => (
    <Provider authStore={authStore}>{bodyComponent}</Provider>
  )
  replaceBodyHTMLString(renderToString(<ProviderBody/>))
}
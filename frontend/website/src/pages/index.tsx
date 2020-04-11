import * as React from "react"

import Layout from "components/root/Layout"
import AuthStore from "../model/AuthStore"
import { inject } from "mobx-react"
import { navigate } from "gatsby"

type Props = {
  authStore: AuthStore
}

@inject("authStore")
export default class RootComponent extends React.Component<Props> {

  componentDidMount(): void {
    if (this.props.authStore.isLoggedIn) {
      try {
        navigate("/app").then().catch()
      }catch (e) {
        
      }
    }
  }


  render(): React.ReactElement {
    return <Layout/>
  }
}
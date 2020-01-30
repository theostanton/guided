import * as React from "react"

import Layout from "components/root/Layout"
import AuthStore from "../model/AuthStore"
import { inject } from "mobx-react"

type Props = {
  authStore: AuthStore
}

@inject("authStore")
export default class RootComponent extends React.Component<Props> {

  componentDidMount(): void {
    this.props.authStore.init().then()
  }

  render(): React.ReactElement {
    return <Layout/>
  }
}
import * as React from "react"
import { Router, Redirect } from "@reach/router"

import Layout from "components/root/Layout"
import AuthStore from "../model/AuthStore"
import { inject } from "mobx-react"
import Account from "components/app/Account"
import Guides from "components/app/Guides"
import Guide from "components/app/Guide"
import Dashboard from "components/app/Dashboard"

type Props = {
  authStore: AuthStore
}

@inject("authStore")
export default class RootComponent extends React.Component<Props> {

  render(): React.ReactElement {

    if (this.props.authStore.isLoggedIn) {
      return <Layout>
        <Router>
          <Account path="/app/account"/>
          <Guide path="/app/guides/:slug"/>
          <Guides path="/app/guides"/>
          <Dashboard path="/app"/>
        </Router>
      </Layout>
    } else {
      return <div>
        {/*<Redirect to='/login'/>*/}
        Not logged in
      </div>
    }
  }
}
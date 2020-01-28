import * as React from "react"
import { Router } from "@reach/router"
import { Container, Segment } from "semantic-ui-react"
import Account from "components/app/Account"
import Dashboard from "components/app/Dashboard"
import Guides from "components/app/Guides"
import Guide from "components/app/Guide"
import AppMenu from "components/app/Menu"
import { inject, observer } from "mobx-react"
import AuthStore from "../models/AuthStore"
import { navigate } from "../../.cache/gatsby-browser-entry"

type Props = {
  authStore: AuthStore
}

@inject("authStore")
@observer
export default class AppComponent extends React.Component<Props> {

  componentDidMount(): void {
    this.props.authStore.init().then()
  }

  render(): React.ReactElement {

    console.log(("route=" + this.props as any)["*"])
    const { isLoggedIn, user, initiating } = this.props.authStore

    if (!isLoggedIn && !initiating) {
      navigate?.("/")?.then()
    }


    return (
      <div style={{ margin: 20 }}>
        <Container>
          <AppMenu/>
          {initiating && <Segment loading/>}
          {user &&
          <Router>
            <Account path="/app/account"/>
            <Guide path="/app/guides/:slug"/>
            <Guides path="/app/guides"/>
            <Dashboard path="/app"/>
          </Router>
          }
        </Container>
      </div>
    )
  }
}

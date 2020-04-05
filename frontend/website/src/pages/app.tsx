import * as React from "react"
import { Router } from "@reach/router"
import { Container } from "semantic-ui-react"
import Account from "components/app/Account"
import Dashboard from "components/app/Dashboard"
import Guides from "components/app/Guides"
import AppMenu from "components/app/Menu"
import { inject, observer } from "mobx-react"
import AuthStore from "../model/AuthStore"
import { navigate } from "gatsby"

type Props = {
  authStore: AuthStore
}

@inject("authStore")
@observer
export default class AppComponent extends React.Component<Props> {

  componentDidMount(): void {
    const { isLoggedIn } = this.props.authStore
    if (!isLoggedIn) {
      navigate?.("/")?.then()
    }

  }

  render(): React.ReactElement | undefined {
    return (
      <div style={{ margin: 20 }}>
        <Container>
          <AppMenu/>
          <Router>
            <Account path="/app/account"/>
            <Guides path="/app/guides"/>
            <Dashboard path="/app"/>
          </Router>
        </Container>
      </div>
    )
  }
}

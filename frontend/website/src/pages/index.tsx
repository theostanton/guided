import * as React from "react"
import { Router, RouteComponentProps } from "@reach/router"
import Layout from "components/root/Layout"
import AuthStore from "../model/AuthStore"
import { inject } from "mobx-react"
import Account from "components/app/Account"
import Guides from "components/app/Guides"
import Guide from "components/app/Guide"
import Dashboard from "components/app/Dashboard"
import Profile from "components/app/Profile"
import Login from "components/pages/login"
import Signup from "components/pages/signup"
import { Container } from "semantic-ui-react"
import AppMenu from "components/app/Menu"
import About from "../components/pages/about"

import { RouteProps } from "react-router"
import OverlayComponent from "../components/app/Overlay"

interface Props extends RouteProps {
  authStore: AuthStore
}

@inject("authStore")
export default class RootComponent extends React.Component<Props> {

  render(): React.ReactElement {

    const { isLoggedIn } = this.props.authStore

    if (isLoggedIn === true) {
      return <div style={{ margin: 20 }}>
        <OverlayComponent />
        <Container>
          <AppMenu/>
        </Container>
        <Container>
          <Router>
            <Account path="/account"/>
            <Guides path="/guides"/>
            <Guide path="/:owner/:slug"/>
            <Profile path="/:owner"/>
            <Dashboard path="/"/>
          </Router>
        </Container>
      </div>
    } else {
      return <Layout>
        <Router>
          <About path="/"/>
          <Login path="/login"/>
          <Signup path="/signup"/>
          <Guide path="/:owner/:slug"/>
          <Profile path="/:owner"/>
        </Router>
      </Layout>
    }
  }
}
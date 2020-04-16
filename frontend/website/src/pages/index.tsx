import * as React from "react"
import { Router, Redirect } from "@reach/router"
import Layout from "components/root/Layout"
import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import Account from "components/app/Account"
import Guide from "components/app/Guide"
import Dashboard from "components/app/Dashboard"
import Profile from "components/app/Profile"
import Login from "components/pages/login"
import Signup from "components/pages/signup"
import { Container } from "semantic-ui-react"
import AppMenu from "components/app/Menu"
import About from "../components/pages/about"

import OverlayComponent from "components/app/Overlay"
import { logJson } from "../utils/logger"
import Search from "components/app/Search"
import CreateGuide from "components/app/CreateGuide"

interface Props {
  authStore: AuthStore
}

@inject("authStore")
@observer
export default class RootComponent extends React.Component<Props> {

  render(): React.ReactElement {

    const { isLoggedIn } = this.props.authStore

    logJson(isLoggedIn, "isLoggedIn")
    if (isLoggedIn === true) {
      return <div style={{ marginTop: "1em" }}>
        <Container>
          <AppMenu/>
        </Container>
        <Container>
          <Router style={{ marginTop: "1em" }}>
            <Redirect from={"/login"} to={"/"} noThrow={true}/>
            <Redirect from={"/signup"} to={"/"} noThrow={true}/>
            <Account path="/account"/>
            <Profile path="/:owner"/>
            <Search path="/search"/>
            <CreateGuide path={"/create"}/>
            <Guide path="/:owner/:slug"/>
            <Guide path="/:owner/:slug/ride/:rideId"/>
            <Guide path="/:owner/:slug/spot/:spotId"/>
            <Dashboard default path="*"/>
          </Router>
        </Container>
        <OverlayComponent/>
      </div>
    } else {
      return <Layout>
        <Router>
          <Login path="/login"/>
          <Signup path="/signup"/>
          <Guide path="/:owner/:slug"/>
          <Profile path="/:owner"/>
          <About default path="*"/>
        </Router>
      </Layout>
    }
  }
}
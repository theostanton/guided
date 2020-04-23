import * as React from "react"
import { Redirect, Router } from "@reach/router"
import Layout from "components/root/Layout"
import { authStore } from "model/AuthStore"
import { observer, Provider } from "mobx-react"
import Account from "components/app/Account"
import Guide from "components/app/Guide"
import Dashboard from "components/app/Dashboard"
import Profile from "components/app/Profile"
import Login from "components/pages/login"
import Signup from "components/pages/signup"
import { Container } from "semantic-ui-react"
import AppMenu from "components/app/Menu"
import About from "../components/pages/about"
import { Helmet } from "react-helmet"

import OverlayComponent from "components/app/Overlay"
import { logJson } from "../utils/logger"
import Search from "components/app/Search"
import CreateGuide from "components/app/CreateGuide"

@observer
export default class RootComponent extends React.Component {

  private(): React.ReactElement {
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
          <CreateGuide path={"/create/:slug"}/>
          <Guide path="/:owner/:slug"/>
          <Guide path="/:owner/:slug/ride/:rideId"/>
          <Guide path="/:owner/:slug/spot/:spotId"/>
          <Dashboard default path="*"/>
        </Router>
      </Container>
      <OverlayComponent/>
    </div>
  }

  public(): React.ReactElement {
    return <Layout>
      <Helmet title="Riders Bible" defer={false}/>
      <Router>
        <Login path="/login"/>
        <Signup path="/signup"/>
        <Guide path="/:owner/:slug"/>
        <Profile path="/:owner"/>
        <About path="/create"/>
        <About default path="*"/>
      </Router>
    </Layout>
  }

  render(): React.ReactElement {

    const ssr = typeof window !== "undefined" && window

    if (!ssr) {
      return null
    }

    const isLoggedIn = authStore.isLoggedIn
    logJson(isLoggedIn, "isLoggedIn")
    return <Provider authStore={authStore}>
      {isLoggedIn ? this.private() : this.public()}
    </Provider>
  }
}
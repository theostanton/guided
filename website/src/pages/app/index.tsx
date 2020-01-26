import * as React from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"
import { Menu, Container } from "semantic-ui-react"
import { logout } from "utils/auth"
import Account from "components/Account"
import Dashboard from "components/Dashboard"
import Guides from "components/Guides"

export default class AppComponent extends React.Component {

  render(): React.ReactElement {

    return (
      <div style={{ margin: 20 }}>
        <Container>
          <Menu attached={true} borderless={true}>
            <Menu.Item
              name={"Home"}
              link={true}
              onClick={async () => {
                await navigate("/app")
              }}/>
            <Menu.Item
              name={"My Guides"}
              link={true}
              onClick={async () => {
                await navigate("/app/guides")
              }}/>
            <Menu.Item
              name={"My Account"}
              link={true}
              onClick={async () => {
                await navigate("/app/account")
              }}/>
            <Menu.Item
              name={"Log out"}
              link={true}
              position='right'
              onClick={async () => {
                logout()
                await navigate("/")
              }}/>
          </Menu>
          <div style={{ margin: 20 }}>

            <Router>
              <Account path="/app/account"/>
              <Guides path="/app/guides"/>
              <Dashboard path="/app"/>
            </Router>
          </div>
        </Container>
      </div>
    )
  }
}
import * as React from "react"
import { Link, navigate } from "gatsby"

import { Menu, Container } from "semantic-ui-react"
import { isLoggedIn, logout } from "utils/auth"

export default class LayoutComponent extends React.Component {

  render(): React.ReactElement {

    const { children } = this.props

    const loggedIn = isLoggedIn()
    return (
      <Container style={{ margin: 20 }}>
        <Menu attached={true} borderless={true}>
          {!loggedIn &&
          <Menu.Menu position='right'>
            <Menu.Item name='Login'><Link to={"/login"}>Login</Link></Menu.Item>
            <Menu.Item name='Signup'><Link to={"/signup"}>Signup</Link></Menu.Item>
          </Menu.Menu>
          }
          {loggedIn &&
          <Menu.Menu position='right'>
            <Menu.Item
              name='Dashboard'
              onClick={async () => {
                await navigate("/app")
              }}/>
            <Menu.Item
              name='Logout'
              onClick={async () => {
                logout()
                await navigate("/")
              }
              }/>
          </Menu.Menu>
          }
        </Menu>
        {children}
      </Container>
    )
  }
}

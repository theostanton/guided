import * as React from "react"
import { Link } from "@reach/router"
import { navigate } from "@reach/router"

import { Menu, Container } from "semantic-ui-react"
import { inject, observer } from "mobx-react"
import AuthStore from "model/AuthStore"

type Props = {
  authStore?: AuthStore
}

@inject("authStore")
@observer
export default class RootLayoutComponent extends React.Component<Props> {

  render(): React.ReactElement {

    const { children } = this.props

    const loggedIn = this.props.authStore!.isLoggedIn
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
                await navigate(`/`)
              }}/>
            <Menu.Item
              name='Logout'
              onClick={async () => {
                await this.props.authStore!.logOut()
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

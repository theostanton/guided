import * as React from "react"
import { navigate } from "gatsby"
import { Container, Menu } from "semantic-ui-react"
import { logout } from "utils/auth"

export default class AppLayout extends React.Component {

  render(): React.ReactElement {
    return (
      <Container style={{ margin: 20 }}>
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
        {this.props.children}
      </Container>
    )
  }
}
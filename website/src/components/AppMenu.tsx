import * as React from "react"
import { Menu, Segment } from "semantic-ui-react"
import { navigate } from "gatsby"
import { logout } from "utils/auth"

type Props = {}

type State = {}

export default class AppMenuComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement {
    return (
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
    )
  }

}
import * as React from "react"
import { Menu } from "semantic-ui-react"
import { navigate } from "@reach/router"
import { inject, observer } from "mobx-react"
import AuthStore from "model/AuthStore"

type Props = {
  authStore?: AuthStore
}

type State = {}

@inject("authStore")
@observer
export default class AppMenu extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement {
    const user = this.props.authStore!.user
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
        <Menu.Menu
          position='right'
        >
          <Menu.Item
            name={user?.username!}
            link={true}
            icon='user'
            onClick={async () => {
              await navigate("/app/account")
            }}
          />
          <Menu.Item
            name={"Log out"}
            link={true}
            onClick={async () => {
              this.props.authStore!.logOut()
              await navigate("/")
            }}/>
        </Menu.Menu>
      </Menu>
    )
  }

}
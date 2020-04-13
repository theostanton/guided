import * as React from "react"
import { Icon, Menu } from "semantic-ui-react"
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
          name={"Dashboard"}
          link={true}
          onClick={async () => {
            await navigate(`/`)
          }}/>

        <Menu.Menu
          position='right'
        >
          <Menu.Item
            name={user?.username!}
            link={true}
            icon={<Icon name={"user"} color={user?.colour?.toLowerCase()}/>}
            onClick={async () => {
              await navigate(`/account`)
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
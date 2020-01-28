import * as React from "react"
import AppContainer from "components/app/Container"
import { Button, Header } from "semantic-ui-react"
import AuthStore from "../../models/AuthStore"
import { inject, observer } from "mobx-react"

type Props = {
  authStore: AuthStore
}

type State = {}

@inject("authStore")
@observer
export default class DashboardComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement | undefined {
    return <AppContainer>
      <Header>My Dashboard</Header>
      <p>User:{this.props.authStore.user?.username}</p>
    </AppContainer>
  }

}
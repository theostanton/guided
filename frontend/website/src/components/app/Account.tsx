import * as React from "react"
import { List } from "semantic-ui-react"
import { inject, observer } from "mobx-react"
import AuthStore from "model/AuthStore"

import { RouteComponentProps } from "@reach/router"

interface Props extends RouteComponentProps {
  authStore?: AuthStore
}

type State = {}

@inject("authStore")
@observer
export default class AccountComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement | undefined {
    const user = this.props.authStore.user!
    return <List divided relaxed>
      <List.Item>
        <List.Icon name='mail' size='large' verticalAlign='middle'/>
        <List.Content>
          <List.Header>Email</List.Header>
          <List.Description>{user.email}</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='user' size='large' verticalAlign='middle'/>
        <List.Content>
          <List.Header>Username</List.Header>
          <List.Description>{user.username}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  }

}
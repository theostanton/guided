import * as React from "react"
import { getCurrentUser } from "utils/auth"
import AppContainer from "components/AppContainer"
import { List } from "semantic-ui-react"

type Props = {}

type State = {}

export default class AccountComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement | undefined {
    const user = getCurrentUser()!
    return <AppContainer>
      <List divided relaxed>
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
    </AppContainer>
  }

}
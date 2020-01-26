import * as React from "react"
import AppLayout from "layouts/app"
import { getCurrentUser } from "utils/auth"
import { List } from "semantic-ui-react"

type Props = {}

type State = {}

export default class AccountComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement {
    const user = getCurrentUser()!!

    return <AppLayout>
      <List divided relaxed>
        <List.Item>
          <List.Icon name='mail' size='large' verticalAlign='middle'/>
          <List.Content>
            <List.Header>Email</List.Header>
            <List.Description>{user.email}</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='lightbulb' size='large' verticalAlign='middle'/>
          <List.Content>
            <List.Header>Details</List.Header>
            <List.Description>{JSON.stringify(user, null, 4)}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </AppLayout>
  }

}
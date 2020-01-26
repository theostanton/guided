import * as React from "react"
import { getCurrentUser } from "../../utils/auth"
import { Container, Header } from "semantic-ui-react"

type Props = {}

type State = {}

export default class DashboardComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement | undefined {
    return <Container>
      <Header>My Dashboard</Header>
    </Container>
  }

}
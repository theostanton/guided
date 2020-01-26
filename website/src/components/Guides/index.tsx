import * as React from "react"
import { getCurrentUser } from "utils/auth"
import { Container, Header, List } from "semantic-ui-react"

type Props = {}

type State = {}

export default class GuidesComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement | undefined {
    return <Container>
      <Header>My guides</Header>
    </Container>
  }

}
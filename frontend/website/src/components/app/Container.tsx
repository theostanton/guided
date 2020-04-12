import * as React from "react"
import { Container } from "semantic-ui-react"

type Props = {}

type State = {}

export default class AppContainerComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement {
    return <Container style={{ marginTop: "2em" }}>
      {this.props.children}
    </Container>
  }

}
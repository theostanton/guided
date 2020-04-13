import * as React from "react"

import { Container, Header } from "semantic-ui-react"
 import { RouteComponentProps } from "@reach/router"

interface Props extends RouteComponentProps {
}

type State = {}

export default class AboutPage extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement {
    return <Container style={{ marginTop: "2em" }}>
      <Header>About</Header>
      <p>Version={process.env.GATSBY_APP_VERSION!}</p>
    </Container>
  }

}
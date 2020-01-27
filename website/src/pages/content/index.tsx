import * as React from "react"

import { Container } from "semantic-ui-react"
import { Router } from "@reach/router"
import PublicGuide from "components/content/Guide"
import Profile from "components/content/Profile"

type Props = {}

type State = {}

export default class ProfileComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement {
    return (
      <>
        <Container>
          <div>
            <Router>
              <PublicGuide path="/:user/:guide"/>
              <Profile path="/:user"/>
            </Router>
          </div>
        </Container>
      </>
    )
  }

}
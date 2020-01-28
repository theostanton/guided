import * as React from "react"

import { Container } from "semantic-ui-react"
import { Router } from "@reach/router"
import PublicGuide from "components/content/Guide"
import Profile from "components/content/Profile"
import Amplify from "aws-amplify"

type Props = {}

type State = {}
import config from "src/aws-exports"
Amplify.configure(config)

export default class ContentComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement {
    return (
      <>
        <Container>
          <div>
            <Router>
              <PublicGuide path="/:user/:slug"/>
              <Profile path="/:user"/>
            </Router>
          </div>
        </Container>
      </>
    )
  }

}
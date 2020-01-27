import * as React from "react"
import { Router } from "@reach/router"
import { Container } from "semantic-ui-react"
import Account from "components/app/Account"
import Dashboard from "components/app/Dashboard"
import Guides from "components/app/Guides"
import Guide from "components/app/Guide"
import AppMenu from "components/app/Menu"
import AmplifyRouter from "amplify-react-router"
import awsExports from "src/aws-exports"
import { navigate } from "gatsby"


export default class AppComponent extends React.Component {

  render(): React.ReactElement {

    console.log(("route=" + this.props as any)["*"])

    const path: string = (this.props as any)["*"]

    if (path.match(/^guides\/[a-zA-Z0-9-]+/)) {
      const slug = path.split("/")[1]
      return <Guide slug={slug}/>
    }

    return (
      <AmplifyRouter style={{ margin: 20 }}
                     amplifyConfig={awsExports}
                     homeRoute="/home"
                     navigate={navigate}>
        <Container>
          <AppMenu/>
          <Router>
            <Account path="/app/account"/>
            <Guides path="/app/guides"/>
            <Dashboard path="/app"/>
          </Router>
        </Container>
      </AmplifyRouter>
    )
  }
}
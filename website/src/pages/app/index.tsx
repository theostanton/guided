import * as React from "react"
import { Router } from "@reach/router"
import { Menu, Container } from "semantic-ui-react"
import Account from "components/Account"
import Dashboard from "components/Dashboard"
import Guides from "components/Guides"
import Guide from "components/Guide"
import AppMenuComponent from "../../components/AppMenu"

export default class AppComponent extends React.Component {

  render(): React.ReactElement {

    console.log((this.props as any)["*"])

    const path: string = (this.props as any)["*"]

    if (path.match(/^guides\/[a-zA-Z0-9-]+/)) {
      const slug = path.split("/")[1]
      return <Guide slug={slug}/>
    }


    return (
      <div style={{ margin: 20 }}>
        <Container>
          <AppMenuComponent/>
          <div>
            <Router>
              <Account path="/app/account"/>
              <Guides path="/app/guides"/>
              <Dashboard path="/app"/>
            </Router>
          </div>
        </Container>
      </div>
    )
  }
}
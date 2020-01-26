import * as React from "react"

import AppLayout from "layouts/app"
import { Header } from "semantic-ui-react"

export default class AppComponent extends React.Component {

  render(): React.ReactElement {
    return <AppLayout>
      <Header>Welcome</Header>
    </AppLayout>
  }

}
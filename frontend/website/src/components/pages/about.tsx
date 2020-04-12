import * as React from "react"

import Layout from "components/root/Layout"
import { Header } from "semantic-ui-react"

const version = require("../../package.json").version

type Props = {}

type State = {}

export default class AboutPage extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement {
    return <Layout>
      <Header>About</Header>
      <p>Version={version}</p>
    </Layout>
  }

}
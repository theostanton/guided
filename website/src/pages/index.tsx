import * as React from "react"

import Layout from "components/root/Layout"

type Props = {}
export default class RootComponent extends React.Component<Props> {
  render(): React.ReactElement {
    return <Layout/>
  }
}
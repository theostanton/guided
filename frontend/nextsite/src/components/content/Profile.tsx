import * as React from "react"

import { Header } from "semantic-ui-react"

type Props = {}

type State = {}

export default class ProfileComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement {
    return <>
      <Header>Profile</Header>
      <p>{JSON.stringify(this.props, null, 4)}</p>
    </>
  }

}
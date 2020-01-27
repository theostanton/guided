import * as React from "react"
import AppContainer from "components/app/Container"
import { Header } from "semantic-ui-react"

type Props = {}

type State = {}

export default class DashboardComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement | undefined {
    return <AppContainer>
      <Header>My Dashboard</Header>
    </AppContainer>
  }

}
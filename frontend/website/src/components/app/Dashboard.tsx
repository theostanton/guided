import * as React from "react"
import AppContainer from "components/app/Container"
import { Header } from "semantic-ui-react"
import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import GuidesList from "./Guides/GuidesList"

type Props = {
  authStore: AuthStore
}

type State = {}

@inject("authStore")
@observer
export default class DashboardComponent extends React.Component<Props, State> {

  state: State = {}

  render(): React.ReactElement | undefined {
    return <AppContainer>
      <Header>My guides</Header>
      <GuidesList owner={this.props.authStore.owner} onClick={(guideSlug: string) => {
        this.setState({
          selectedGuideSlug: guideSlug,
        })
      }
      }/>
    </AppContainer>
  }

}
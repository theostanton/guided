import * as React from "react"
import AppContainer from "components/app/Container"
import { Grid, Header } from "semantic-ui-react"
import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import { MyGuidesList } from "./Guides/GuidesList"
import Feed from "./Feed"
import GuideComponent from "./Guide"
import { GuideInfoFragment } from "../../api/generated"

import { RouteProps } from "react-router"

interface Props extends RouteProps {
  authStore?: AuthStore
}

type State = {
  selectedGuide: GuideInfoFragment | undefined
}

@inject("authStore")
@observer
export default class DashboardComponent extends React.Component<Props, State> {

  state: State = {
    selectedGuide: undefined,
  }

  guides(): React.ReactElement {

    if (!this.props.authStore.owner) {
      return <div/>
    }

    return <Grid columns={2}>
      <Grid.Column>
        <Header>My guides</Header>
        <MyGuidesList owner={this.props.authStore.owner}/>
      </Grid.Column>
      <Grid.Column>
        <Header>Feed</Header>
        <Feed/>
      </Grid.Column>
    </Grid>
  }

  guide(): React.ReactElement {
    return <GuideComponent guideId={this.state.selectedGuide.id} slug={this.state.selectedGuide.slug}/>
  }

  render(): React.ReactElement | undefined {
    return <AppContainer>
      {this.props.authStore.isLoggedIn === true && this.state.selectedGuide ? this.guide() : this.guides()}
    </AppContainer>
  }

}
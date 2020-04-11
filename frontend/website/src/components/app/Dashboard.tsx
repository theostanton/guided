import * as React from "react"
import AppContainer from "components/app/Container"
import { Grid, Header } from "semantic-ui-react"
import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import { MyGuidesList, SharedGuidesList } from "./Guides/GuidesList"
import GuideComponent from "./Guide"
import { GuideInfoFragment } from "../../api/generated"

type Props = {
  authStore: AuthStore
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
    return <Grid columns={2}>
      <Grid.Column>
        <Header>My guides</Header>
        <MyGuidesList owner={this.props.authStore.owner}/>
      </Grid.Column>
      <Grid.Column>
        <Header>Shared guides</Header>
        <SharedGuidesList owner={this.props.authStore.owner}/>
      </Grid.Column>
    </Grid>
  }

  guide(): React.ReactElement {
    return <GuideComponent guideId={this.state.selectedGuide.id} slug={this.state.selectedGuide.slug} close={() => {
      this.setState({
        selectedGuide: undefined,
      })
    }
    }/>
  }


  render(): React.ReactElement | undefined {
    return <AppContainer>
      {this.props.authStore.isLoggedIn && this.state.selectedGuide ? this.guide() : this.guides()}
    </AppContainer>
  }

}
import * as React from "react"
import AppContainer from "components/app/Container"
import { Grid, Header } from "semantic-ui-react"
import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import { MyGuidesList, SharedGuidesList } from "./Guides/GuidesList"
import GuideComponent from "./Guide"

type Props = {
  authStore: AuthStore
}

type State = {
  selectedGuideId: string | undefined
}

@inject("authStore")
@observer
export default class DashboardComponent extends React.Component<Props, State> {

  state: State = {
    selectedGuideId: undefined,
  }

  guides(): React.ReactElement {
    return <Grid columns={2}>
      <Grid.Column>
        <Header>My guides</Header>
        <MyGuidesList owner={this.props.authStore.owner} onClick={(guideId: string) => {
          this.setState({
            selectedGuideId: guideId,
          })
        }
        }/>
      </Grid.Column>
      <Grid.Column>
        <Header>Shared guides</Header>
        <SharedGuidesList owner={this.props.authStore.owner} onClick={(guideId: string) => {
          this.setState({
            selectedGuideId: guideId,
          })
        }
        }/>
      </Grid.Column>
    </Grid>
  }

  guide(): React.ReactElement {
    return <GuideComponent guideId={this.state.selectedGuideId} close={() => {
      this.setState({
        selectedGuideId: undefined,
      })
    }
    }/>
  }


  render(): React.ReactElement | undefined {
    return <AppContainer>
      {this.props.authStore.isLoggedIn && this.state.selectedGuideId ? this.guide() : this.guides()}
    </AppContainer>
  }

}
import * as React from "react"
import { Button } from "semantic-ui-react"
import GuideDetailsModalComponent from "components/app/GuideDetailsModal"
import AppContainer from "components/app/Container"
import GuidesList from "./GuidesList"

import AuthStore from "models/AuthStore"
import { inject } from "mobx-react"

type Props = {
  authStore: AuthStore
}

type State = {
  showCreateModal: boolean
}

@inject("authStore")
export default class GuidesComponent extends React.Component<Props, State> {

  render(): React.ReactElement | undefined {
    return <AppContainer>
      <Button
        content='Create new'
        onClick={() => {
          this.setState({ showCreateModal: true })
        }}/>

      {this.state.showCreateModal && <GuideDetailsModalComponent onClose={() => {
        this.setState({ showCreateModal: false })
      }}/>}

      <GuidesList owner={this.props.authStore.owner}/>
    </AppContainer>
  }

}
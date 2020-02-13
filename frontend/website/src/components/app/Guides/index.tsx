import * as React from "react"
import { Button } from "semantic-ui-react"
import GuideDetailsModalComponent from "components/app/GuideDetailsModal"
import AppContainer from "components/app/Container"
import GuidesList from "./GuidesList"

import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"

type Props = {
  authStore: AuthStore,
  guideStore: GuideStore
}

type State = {
  inc: number
  showCreateModal: boolean
}

@inject("authStore", "guideStore")
@observer
export default class GuidesComponent extends React.Component<Props, State> {

  state: State = {
    inc: 0,
    showCreateModal: false,
  }

  render(): React.ReactElement | undefined {
    return <AppContainer>
      <Button
        content='Create new'
        onClick={() => {
          this.setState({ showCreateModal: true })
        }}/>

      {this.state.showCreateModal &&
      <GuideDetailsModalComponent owner={this.props.authStore.owner}
                                  onClose={() => {
                                    this.setState({ showCreateModal: false, inc: this.state.inc + 1 })
                                  }}/>}

      {!this.state.showCreateModal && <GuidesList owner={this.props.authStore.owner} inc={this.state.inc}/>}
    </AppContainer>
  }

}
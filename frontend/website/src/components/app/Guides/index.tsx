import * as React from "react"
import { Button } from "semantic-ui-react"
import GuideDetailsModalComponent from "components/app/GuideDetailsModal"
import AppContainer from "components/app/Container"
import GuidesList from "./GuidesList"

import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import GuideComponent from "../Guide"

type Props = {
  authStore: AuthStore,
  guideStore: GuideStore
}

type State = {
  showCreateModal: boolean
  selectedGuideSlug: string | undefined
}

@inject("authStore")
@observer
export default class GuidesComponent extends React.Component<Props, State> {

  state: State = {
    showCreateModal: false,
    selectedGuideSlug: undefined,
  }

  content(): React.ReactElement | React.ReactElement[] {

    if (this.state.showCreateModal) {
      return <GuideDetailsModalComponent owner={this.props.authStore.owner}
                                         onClose={() => {
                                           this.setState({ showCreateModal: false })
                                         }}/>
    } else if (this.state.selectedGuideSlug) {
      return <GuideComponent slug={this.state.selectedGuideSlug} owner={this.props.authStore.owner} close={() => {
        this.setState({
          selectedGuideSlug: undefined,
        })
      }
      }/>
    } else {
      return [<Button
        content='Create new'
        onClick={() => {
          this.setState({ showCreateModal: true })
        }}/>, <GuidesList owner={this.props.authStore.owner} onClick={(guideSlug: string) => {
        this.setState({
          selectedGuideSlug: guideSlug,
        })
      }
      }/>]
    }

  }

  render(): React.ReactElement | undefined {
    return <AppContainer>
      {this.content()}
    </AppContainer>
  }

}
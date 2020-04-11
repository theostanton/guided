import * as React from "react"
import { Button } from "semantic-ui-react"
import GuideDetailsModalComponent from "components/app/GuideDetailsModal"
import AppContainer from "components/app/Container"

import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import GuideComponent from "../Guide"
import { MyGuidesList } from "./GuidesList"

type Props = {
  authStore: AuthStore,
  guideStore: GuideStore
}

type State = {
  showCreateModal: boolean
  selectedGuideId: string | undefined
}

@inject("authStore")
@observer
export default class GuidesComponent extends React.Component<Props, State> {

  state: State = {
    showCreateModal: false,
    selectedGuideId: undefined,
  }

  // content(): React.ReactElement | React.ReactElement[] {
  //
  //   if (this.state.showCreateModal) {
  //     return <GuideDetailsModalComponent owner={this.props.authStore.owner}
  //                                        onClose={(guideId: string) => {
  //                                          this.setState({
  //                                            selectedGuideId: guideId,
  //                                            showCreateModal: false,
  //                                          })
  //                                        }}/>
  //   } else if (this.state.selectedGuideId) {
  //     return <GuideComponent guideId={this.state.selectedGuideId}/>
  //   } else {
  //     return [<Button
  //       content='Create new'
  //       onClick={() => {
  //         this.setState({ showCreateModal: true })
  //       }}/>, <MyGuidesList owner={this.props.authStore.owner}/>]
  //   }
  //
  // }

  render(): React.ReactElement | undefined {
    return <AppContainer>
      {/*{this.content()}*/}
    </AppContainer>
  }

}
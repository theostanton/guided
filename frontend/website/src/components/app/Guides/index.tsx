import * as React from "react"
import { Button } from "semantic-ui-react"
import GuideDetailsModalComponent from "components/app/GuideDetailsModal"
import AppContainer from "components/app/Container"

import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import { MyGuidesList } from "./GuidesList"
import { navigate } from "@reach/router"
import { log } from "utils/logger"

import {  RouteProps } from "react-router"

interface Props extends RouteProps {
  authStore?: AuthStore,
  guideStore?: GuideStore
}

type State = {
  showCreateModal: boolean
}

@inject("authStore")
@observer
export default class GuidesComponent extends React.Component<Props, State> {

  state: State = {
    showCreateModal: false,
  }

  content(): React.ReactElement | React.ReactElement[] {

    if (this.state.showCreateModal) {
      return <GuideDetailsModalComponent owner={this.props.authStore.owner}
                                         onClose={async (guideSlug: string) => {
                                           this.setState({
                                             showCreateModal: false,
                                           })
                                           await navigate(`/app/guides/${guideSlug}`)
                                         }}/>
    } else {
      return [<Button
        content='Create new'
        onClick={() => {
          this.setState({ showCreateModal: true })
        }}/>, <MyGuidesList owner={this.props.authStore.owner}/>]
    }

  }

  render(): React.ReactElement | undefined {
    return <AppContainer>
      {this.content()}
    </AppContainer>
  }

}
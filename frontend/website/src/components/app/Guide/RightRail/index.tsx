import { inject, observer } from "mobx-react"
import * as React from "react"
import GuideStore from "model/GuideStore"
import SpotDetail from "./SpotDetail"
import RideDetail from "./RideDetail"
import StageList from "./StageList"
import { Segment } from "semantic-ui-react"
import { logObject } from "utils/logger"


type Props = {
  guideStore?: GuideStore
}

@inject("guideStore")
@observer
export default class RightRailComponent extends React.Component<Props> {


  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  contents(): React.ReactElement {
    const selectedSpot = this.guideStore.selectedSpot
    const selectedRide = this.guideStore.selectedRide


    if (selectedSpot) {
      return <SpotDetail spot={selectedSpot} close={() => {
        this.guideStore.unselect()
      }}/>
    }

    if (selectedRide) {
      return <RideDetail ride={selectedRide} guideStore={this.guideStore} close={() => {
        this.guideStore.unselect()
      }}/>
    }

    if (this.props.guideStore.guide) {
      return <StageList/>
    }

  }

  render(): React.ReactElement {
    return <Segment style={{ backgroundColor: "#ffffff" }}>
      {this.guideStore && this.contents.bind(this)()}
    </Segment>

  }
}
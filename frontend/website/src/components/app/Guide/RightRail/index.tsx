import { inject, observer } from "mobx-react"
import * as React from "react"
import GuideStore from "model/GuideStore"
import SpotDetail from "./SpotDetail"
import RideDetail from "./RideDetail"
import StageList from "./StageList"
import { CSSProperties } from "react"
import { Segment } from "semantic-ui-react"


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
        this.guideStore.refetch()
      }}/>
    }

    if (selectedRide) {
      return <RideDetail ride={selectedRide}/>
    }

    if (this.props.guideStore.guide) {
      return <StageList/>
    }

  }

  render(): React.ReactElement {

    return <Segment style={{ backgroundColor: "#ffffff" }}>
      {this.contents.bind(this)()}
    </Segment>

  }
}
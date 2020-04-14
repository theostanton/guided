import { inject, observer } from "mobx-react"
import * as React from "react"
import GuideStore from "model/GuideStore"
import SpotDetail from "./SpotDetail"
import RideDetail from "./RideDetail"
import StageList from "./StageList"
import { Segment } from "semantic-ui-react"
import { logObject } from "utils/logger"
import { CSSProperties } from "react"


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

    const isOwner = this.guideStore.isOwner
    const selectedSpot = this.guideStore.selectedSpot
    const selectedRide = this.guideStore.selectedRide


    if (selectedSpot) {
      return <SpotDetail spot={selectedSpot} isOwner={isOwner} close={() => {
        this.guideStore.unselect()
      }}/>
    }

    if (selectedRide) {
      return <RideDetail ride={selectedRide}  guideStore={this.guideStore} close={() => {
        this.guideStore.unselect()
      }}/>
    }

    if (this.props.guideStore.guide) {
      return <StageList/>
    }

  }

  render(): React.ReactElement {

    const style:CSSProperties={
      // overflowY: "scroll",
      // height: "100%",
      // maxHeight: "2em",
      padding:0,
      margin:0,
      backgroundColor: "#ffffff"
    }
    return <Segment style={style} padded={false}>
      {this.guideStore && this.contents.bind(this)()}
    </Segment>

  }
}
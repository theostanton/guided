import { inject, observer } from "mobx-react"
import * as React from "react"
import GuideStore from "../../../../model/GuideStore"
import { Icon, Segment } from "semantic-ui-react"
import SpotDetail from "./SpotDetail"
import RideDetail from "./RideDetail"


type Props = {
  guideStore?: GuideStore
}

@inject("guideStore")
@observer
export default class RightRailComponent extends React.Component<Props> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  render(): React.ReactElement {
    const guide = this.guideStore.guide

    if (!guide) {
      return <Segment loading/>
    }

    const selectedSpot = this.guideStore.selectedSpot
    const selectedRide = this.guideStore.selectedRide

    if (!selectedSpot && !selectedRide) {
      return <div/>
    }

    return <Segment style={{ backgroundColor: "#ffffff" }}>
      <Icon name={"close"} size={'large'} onClick={() => {
        this.guideStore.unselect()
      }}/>
      {selectedSpot && <SpotDetail spot={selectedSpot}/>}
      {selectedRide && <RideDetail ride={selectedRide}/>}
    </Segment>
  }
}
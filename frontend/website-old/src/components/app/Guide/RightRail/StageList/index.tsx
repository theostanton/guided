import GuideStore from "model/GuideStore"
import { inject, observer } from "mobx-react"
import * as React from "react"
import { CSSProperties, ReactElement } from "react"
import { Header, List, Segment } from "semantic-ui-react"
import SpotItem from "./SpotItem"
import RideItem from "./RideItem"
import LoadingStageItem from "./LoadingStageItem"

type Props = {
  guideStore?: GuideStore
}

@inject("guideStore")
@observer
export default class StageList extends React.Component<Props> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }


  generateListItems(): ReactElement[] {


    const stages = this.guideStore.stages

    if (stages.length === 0) {
      return this.guideStore.spots.map(spot => {
        return <SpotItem key={`${spot.id}`} spot={spot} guideStore={this.guideStore}/>
      })
    }

    const items: ReactElement[] = []

    stages.forEach((stage, stageIndex) => {

      if (stage.status === "READY") {
        stage.ridesByStage.nodes.forEach((ride, index) => {
          const { fromSpot } = ride
          items.push(<SpotItem key={`${fromSpot.id}`}
                               spot={fromSpot}
                               guideStore={this.guideStore}
                               position={index === 0 && stageIndex === 0 ? "first" : "middle"}/>)
          items.push(<RideItem key={`${ride.id}`}
                               ride={ride}
                               guideStore={this.guideStore}/>)
        })
      } else {
        const { fromSpot } = stage
        items.push(<SpotItem key={`${fromSpot.id}`}
                             spot={fromSpot}
                             position={stageIndex === 0 ? "first" : "middle"}
                             guideStore={this.guideStore}/>)
        items.push(<RideItem ride={null}
                             guideStore={this.guideStore}/>)
      }
    })

    if (stages.length > 0) {
      const firstSpot = stages[0].fromSpot
      items.push(<SpotItem key={`${firstSpot.id}-last`}
                           spot={firstSpot}
                           guideStore={this.guideStore}
                           position={stages.length === 1 ? "only" : "last"}/>)
    }

    return items
  }

  render(): React.ReactElement {
    const items: ReactElement[] = this.generateListItems()
    const style: CSSProperties = {
      margin: 0,
      padding: 0,
    }
    const listStyle: CSSProperties = {
      overflowY: "scroll",
      maxHeight: "35em",
    }
    return <div
      style={listStyle}>
      {items}
    </div>
  }

}
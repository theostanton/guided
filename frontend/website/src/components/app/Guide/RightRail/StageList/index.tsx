import GuideStore from "model/GuideStore"
import { inject, observer } from "mobx-react"
import * as React from "react"
import { CSSProperties, ReactElement } from "react"
import { List, Segment } from "semantic-ui-react"
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

    const items: ReactElement[] = []

    stages.forEach(stage => {

      if (stage.status === "READY") {
        stage.ridesByStage.nodes.forEach(ride => {
          const { fromSpot } = ride
          items.push(<SpotItem key={`${fromSpot.id}`} spot={fromSpot} guideStore={this.guideStore}/>)
          items.push(<RideItem key={`${ride.id}`} ride={ride} guideStore={this.guideStore}/>)
        })
      } else {
        const { fromSpot } = stage
        items.push(<SpotItem key={`${fromSpot.id}`} spot={fromSpot} guideStore={this.guideStore}/>)
        items.push(<LoadingStageItem key={stage.id} stage={stage}/>)
      }
    })

    if (stages.length > 0) {
      const firstSpot = stages[0].fromSpot
      items.push(<SpotItem key={`${firstSpot.id}-last`} spot={firstSpot} guideStore={this.guideStore}/>)
    }

    return items
  }

  render(): React.ReactElement {
    const items: ReactElement[] = this.generateListItems()
    return <List items={items}
                 celled={true}
                 selection={true}
                 relaxed={true}
    />
  }

}
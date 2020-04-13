import * as React from "react"
import { Grid, GridColumn, List } from "semantic-ui-react"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import { ReactElement } from "react"
import RideItem from "./RideItem"
import SpotItem from "./SpotItem"
import { SpotFragment } from "api/generated"

type Props = {
  guideStore?: GuideStore
}

@inject("guideStore")
@observer
export default class RideAndSpotList extends React.Component<Props> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  generateListItems(): ReactElement[] {

    const rides = this.guideStore.rides
    const items: ReactElement[] = []

    rides.forEach(ride => {
      const spot: SpotFragment = ride.fromSpot!
      items.push(<SpotItem key={`${spot.id}`} spot={spot} guideStore={this.guideStore}/>)
      items.push(<RideItem key={`${ride.id}`} ride={ride} guideStore={this.guideStore}/>)
    })

    return items
  }

  render(): React.ReactElement {

    const items: ReactElement[] = this.generateListItems()
    return <Grid.Row columns='equal'>
      <Grid.Column>
        <List items={items}
              animated={true}
              celled={true}
              selection={true}
              relaxed={true}
        />
      </Grid.Column>
    </Grid.Row>
  }
}
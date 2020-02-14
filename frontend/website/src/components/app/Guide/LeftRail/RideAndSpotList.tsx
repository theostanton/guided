import * as React from "react"
import { Grid, GridColumn, List } from "semantic-ui-react"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import { ReactElement } from "react"
import RideItem from "./RideItem"
import { SpotByGuideFragment } from "api/generated"
import SpotItem from "./SpotItem"

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
      const spot: SpotByGuideFragment = ride.fromSpot!
      items.push(<SpotItem key={spot.id} spot={spot} guideStore={this.guideStore}/>)
      items.push(<RideItem key={ride.id} ride={ride} guideStore={this.guideStore}/>)
    })

    return items
  }

  render(): React.ReactElement {

    const items: ReactElement[] = this.generateListItems()
    return <Grid.Row columns='equal'>
      <GridColumn>
        <List items={items}
              celled={true}
              selection={true}
              relaxed={true}
        />
      </GridColumn>
    </Grid.Row>
  }
}
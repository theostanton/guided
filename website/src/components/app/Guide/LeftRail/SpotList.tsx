import { SpotByGuideFragment } from "api/generated"
import * as React from "react"
import { Grid, GridColumn, Header, List, Segment } from "semantic-ui-react"
import { log, logJson } from "@guided/logger"
import { inject, observer } from "mobx-react"
import GuideStore from "../../../../model/GuideStore"

type Props = {
  guideStore?: GuideStore
  spots: SpotByGuideFragment[]
  selectSpot: (spotId: string) => void
}

@inject("guideStore")
@observer
export default class SpotList extends React.Component<Props> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  render(): React.ReactElement[] {
    const spots = this.props.spots
    const items = spots.map(spot => {
      const isSelected = spot.id === this.guideStore.selectedId
      return <List.Item
        key={spot.id}
        value={spot.id}
        onMouseEnter={() => {
          this.guideStore.highlightSpot(spot.id)
        }}
        onMouseLeave={() => {
          this.guideStore.unhighlight()
        }}
        active={isSelected}
      >
        <List.Content>
          <List.Header content={spot.label || "Label"}/>
          <List.Description key='lat' content={`Lat:${spot.lat}`}/>
          <List.Description key='long' content={`Long:${spot.long}`}/>
          <List.Description key='locked' content={`Locked:${spot.locked}`}/>
        </List.Content>
      </List.Item>
    })
    return [(
      <Grid.Row>
        <Segment basic><Header>Spots</Header></Segment>
      </Grid.Row>
    ), (
      <Grid.Row columns='equal'>
        <GridColumn>
          <List items={items}
                selection={true}
                relaxed={true}
                onItemClick={(event, data) => {
                  // logJson(event, "event")
                  logJson(data.value, "data")
                  this.props.selectSpot(data.value!)
                }}/>
        </GridColumn>
      </Grid.Row>
    )]
  }
}
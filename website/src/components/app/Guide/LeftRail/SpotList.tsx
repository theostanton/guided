import { SpotByGuideFragment } from "api/generated"
import * as React from "react"
import { Grid, GridColumn, Header, List } from "semantic-ui-react"
import { logJson } from "@guided/logger"

type Props = {
  spots: SpotByGuideFragment[]
  selectSpot: (spotId: string) => void
}

export default class SpotList extends React.Component<Props> {

  render(): React.ReactElement {
    const spots = this.props.spots
    const items = spots.map(spot => {
      return <List.Item
        key={spot.id}
        value={spot.id}
      >
        <List.Content>
          <List.Header content={spot.label || "Label"}/>
          <List.Description content={`Lat:${spot.lat}`}/>
          <List.Description content={`Long:${spot.long}`}/>
          <List.Description content={`Locked:${spot.locked}`}/>
        </List.Content>
      </List.Item>
    })
    return <Grid.Row columns='equal'>
      <GridColumn>
        <Header content={"High"}/>
        <List items={items} onItemClick={(event, data) => {
          // logJson(event, "event")
          logJson(data.value, "data")
          this.props.selectSpot(data.value!)
        }}/>
      </GridColumn>
    </Grid.Row>
  }
}
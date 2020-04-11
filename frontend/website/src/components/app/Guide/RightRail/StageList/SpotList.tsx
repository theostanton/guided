import { SpotByGuideFragment } from "api/generated"
import * as React from "react"
import { Grid, GridColumn, Header, List, Segment } from "semantic-ui-react"
import { log, logJson } from "utils/logger"
import { inject, observer } from "mobx-react"
import GuideStore from "../../../../model/GuideStore"

type Props = {
  guideStore?: GuideStore
}

@inject("guideStore")
@observer
export default class SpotList extends React.Component<Props> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  render(): React.ReactElement {
    const spots: SpotByGuideFragment[] = this.guideStore.spots
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
    return <Grid.Row columns='equal'>
      <Grid.Column>
        <List items={items}
              selection={true}
              relaxed={true}
              onItemClick={(event, data) => {
                this.guideStore.selectSpot(data.value!)
              }}/>
      </Grid.Column>
    </Grid.Row>

  }
}
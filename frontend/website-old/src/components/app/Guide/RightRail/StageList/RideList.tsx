import * as React from "react"
import { Grid, GridColumn, List } from "semantic-ui-react"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"

type Props = {
  guideStore?: GuideStore
}

@inject("guideStore")
@observer
export default class RideList extends React.Component<Props> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  render(): React.ReactElement {
    const rides = this.guideStore.rides
    const items = rides.map(ride => {
      const isSelected = ride.id === this.guideStore.selectedId

      const hours = ride.durationSeconds! / 60 / 60

      return <List.Item
        key={ride.id}
        value={ride.id}
        onMouseEnter={() => {
          this.guideStore.highlightRide(ride.id)
        }}
        onMouseLeave={() => {
          this.guideStore.unhighlight()
        }}
        active={isSelected}
      >
        <List.Content>
          <List.Header content={`${hours} hours`}/>
        </List.Content>
      </List.Item>
    })
    return <Grid.Row columns='equal'>
      <Grid.Column>
        <List items={items}
              selection={true}
              relaxed={true}
              onItemClick={(event, data) => {
                this.guideStore.selectRide(data.value!)
              }}/>
      </Grid.Column>
    </Grid.Row>
  }
}
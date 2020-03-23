import { RideFragment } from "api/generated"
import React from "react"
import { Icon, Label, List } from "semantic-ui-react"
import GuideStore from "model/GuideStore"
import { humanDate, humanDistance, humanDuration } from "utils/human"

type Props = {
  ride: RideFragment
  guideStore: GuideStore
}
export default class RideItem extends React.Component<Props> {

  render(): React.ReactElement {
    const { ride, guideStore } = this.props
    const isSelected = guideStore.selectedId === ride.id
    return <List.Item
      key={ride.id}
      value={ride.id}
      onMouseEnter={() => {
        guideStore.highlightRide(ride.id)
      }}
      onClick={() => {
        guideStore.selectRide(ride.id!)
      }}
      onMouseLeave={() => {
        guideStore.unhighlight()
      }}
      active={isSelected}
    >
      <List.Icon size='large' verticalAlign='top'>
        <Icon name='motorcycle'/>
      </List.Icon>
      <List.Content>
        <List.Header>
          {ride.name}
        </List.Header>
      </List.Content>
      {ride.date && <Label>
        <Icon name='calendar'/>{`${humanDate(ride.date)}`}
      </Label>}
      <Label>
        <Icon name='clock'/>{`${humanDuration(ride.durationSeconds!)}`}
      </Label>
      <Label>
        <Icon name='road'/>{`${humanDistance(ride.distanceMeters!)}`}
      </Label>
      {ride.hasBorder && <Label>
        <Icon name='address card'/>Border
      </Label>}
    </List.Item>
  }
}
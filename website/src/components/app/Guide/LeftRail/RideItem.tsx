import { RideByGuideFragment } from "api/generated"
import React from "react"
import { List } from "semantic-ui-react"
import GuideStore from "model/GuideStore"
import { humanDistance, humanDuration } from "utils/human"

type Props = {
  ride: RideByGuideFragment
  guideStore: GuideStore
}
export default class RideItem extends React.Component<Props> {

  render(): React.ReactElement {
    const { ride, guideStore } = this.props
    const isSelected = guideStore.selectedId === ride.id
    const duration = humanDuration(ride.durationSeconds!)
    const distance = humanDistance(ride.distanceMeters!)
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
      <List.Icon name='motorcycle' size='large' verticalAlign='middle'/>
      <List.Content>
        <List.Header content={duration}/>
        <List.Description content={distance}/>
      </List.Content>
    </List.Item>
  }
}
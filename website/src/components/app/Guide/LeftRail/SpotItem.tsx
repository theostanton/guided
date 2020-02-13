import { SpotByGuideFragment } from "api/generated"
import React from "react"
import { List } from "semantic-ui-react"
import GuideStore from "model/GuideStore"

type Props = {
  spot: SpotByGuideFragment
  guideStore: GuideStore
}

export default class SpotItem extends React.Component<Props> {

  render(): React.ReactElement {
    const { spot, guideStore } = this.props
    const isSelected = guideStore.selectedId === spot.id
    return <List.Item
      key={spot.id}
      value={spot.id}
      onClick={() => {
        guideStore.selectSpot(spot.id!)
      }}
      onMouseEnter={() => {
        guideStore.highlightSpot(spot.id)
      }}
      onMouseLeave={() => {
        guideStore.unhighlight()
      }}
      active={isSelected}>
      <List.Icon name='marker' size='large' verticalAlign='middle'/>
      <List.Content>
        <List.Header
          content={`${spot.label || spot.location}`}
        />
        {spot.label && <List.Description content={spot.location}/>}
      </List.Content>
    </List.Item>
  }
}
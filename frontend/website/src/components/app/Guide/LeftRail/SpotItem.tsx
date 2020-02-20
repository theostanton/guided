import { SpotByGuideFragment } from "api/generated"
import React from "react"
import { Flag, Grid, List, Label, Icon, Divider, FlagNameValues } from "semantic-ui-react"
import GuideStore from "model/GuideStore"
import { humanDate, humanTemperature } from "../../../../utils/human"
import { logJson } from "utils/logger"

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
      <List.Icon size='large' verticalAlign='top'>
        <Flag name={spot.country!.toLowerCase() as FlagNameValues}/>
      </List.Icon>
      <List.Content>
        <List.Header
          content={`${spot.label || spot.location}`}
        />
        {spot.label && <List.Description content={spot.location}/>}

      </List.Content>
      <Divider hidden/>
      <Label>
        <Icon name='moon'/>{spot.nights}
      </Label>
      {spot.date && <Label>
        <Icon name='calendar'/>{humanDate(spot.date)}
      </Label>}
      {spot.temperature && <Label color='orange'>
        <Icon name='thermometer'/>{humanTemperature(spot.temperature)}
      </Label>}
    </List.Item>
  }
}
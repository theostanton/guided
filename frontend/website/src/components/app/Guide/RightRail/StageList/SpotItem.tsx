import { SpotFragment } from "api/generated"
import React, { CSSProperties } from "react"
import { Flag, List, Label, Icon, Divider, FlagNameValues, Header } from "semantic-ui-react"
import GuideStore from "model/GuideStore"
import { humanDate, humanTemperature } from "utils/human"

type Props = {
  spot: SpotFragment
  guideStore: GuideStore
}

export default class SpotItem extends React.Component<Props> {

  render(): React.ReactElement {

    const style: CSSProperties = {
      padding: "1em",
    }

    const { spot, guideStore } = this.props
    const isSelected = guideStore.selectedId === spot.id
    return <List.Item
      key={spot.id}
      value={spot.id}
      style={style}
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
      <Header>
        <Icon name={spot.locked ? "flag" : "flag outline"} color={"black"}/>
        <Header.Content>
          {spot.name}
          <Header.Subheader><Flag name={spot.country?.toLowerCase() as FlagNameValues}/>
            {`${spot.name === spot.location ? "" : spot.location + ", "}${spot.country}`}</Header.Subheader>
        </Header.Content>
      </Header>
      <Divider hidden/>
      <Label>
        <Icon name='moon'/>{spot.nights}
      </Label>
      {spot.date && <Label>
        <Icon name='calendar'/>{humanDate(spot.date, true)}
      </Label>}
      {spot.temperature && <Label color='orange'>
        <Icon name='thermometer'/>{humanTemperature(spot.temperature)}
      </Label>}
    </List.Item>
  }
}
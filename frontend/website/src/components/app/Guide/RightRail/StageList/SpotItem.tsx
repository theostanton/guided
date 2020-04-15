import { SpotFragment } from "api/generated"
import React, { CSSProperties } from "react"
import { Flag, Label, Icon, Divider, FlagNameValues, Header, GridColumn, Grid } from "semantic-ui-react"
import GuideStore from "model/GuideStore"
import { humanDate, humanTemperature } from "utils/human"
import StageSpotLine from "./StageSpotLine"

type Props = {
  spot: SpotFragment
  guideStore: GuideStore
}

export default class SpotItem extends React.Component<Props> {

  render(): React.ReactElement {

    const style: CSSProperties = {
      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0,
    }

    const styleNoPadding: CSSProperties = {
      padding: 0,
    }

    const { spot, guideStore } = this.props
    const isSelected = guideStore.selectedId === spot.id
    return <Grid columns={2}
                 key={spot.id}
                 value={spot.id}
                 padded={false}
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
      <GridColumn width={4} stretched style={styleNoPadding}>
        <StageSpotLine spot={spot}/>
      </GridColumn>
      <GridColumn width={12}>
        <Header>
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
      </GridColumn>
    </Grid>
  }

}
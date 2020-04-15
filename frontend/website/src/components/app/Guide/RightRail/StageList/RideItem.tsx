import { RideFragment } from "api/generated"
import React, { CSSProperties } from "react"
import { CardMeta, Grid, GridColumn, Header, Icon, Label, List } from "semantic-ui-react"
import GuideStore from "model/GuideStore"
import { humanDistance, humanDuration } from "utils/human"
import StageRideLine from "./StageRideLine"
import randomKey from "utils/randomKey"

type Props = {
  ride: RideFragment | null
  guideStore: GuideStore
}
export default class RideItem extends React.Component<Props> {

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

    const { ride, guideStore } = this.props
    const key = ride ? ride.id : randomKey()
    const isSelected = guideStore.selectedId === key
    return <Grid columns={2}
                 key={key}
                 value={key}
                 style={style}
                 padded={false}
                 onMouseEnter={() => {
                   if (ride) {
                     guideStore.highlightRide(ride.id)
                   }
                 }}
                 onClick={() => {
                   if (ride) {
                     guideStore.selectRide(ride.id!)
                   }
                 }}
                 onMouseLeave={() => {
                   if (ride) {
                     guideStore.unhighlight()
                   }
                 }}
                 active={isSelected}
    >

      <GridColumn width={4} stretched style={styleNoPadding}>
        <StageRideLine ride={ride}/>
      </GridColumn>
      {ride &&
      <GridColumn width={12} style={{ paddingLeft: 0 }}>
        <CardMeta>
          {humanDuration(ride.durationSeconds, true)}
        </CardMeta>
        <CardMeta>
          {humanDistance(ride.distanceMeters!, true, true)}
        </CardMeta>

        {ride.hasBorder && <Label>
          Border
        </Label>}
      </GridColumn>
      }
    </Grid>
  }
}
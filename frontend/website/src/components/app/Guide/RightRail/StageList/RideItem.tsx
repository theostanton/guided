import { RideFragment } from "api/generated"
import React, { CSSProperties } from "react"
import { CardMeta, Grid, GridColumn, Header, Icon, Label, List } from "semantic-ui-react"
import GuideStore from "model/GuideStore"
import { humanDistance, humanDuration } from "utils/human"
import StageRideLine from "./StageRideLine"
import randomKey from "utils/randomKey"
import StageSpotLine from "./StageSpotLine"

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


    const styles: { [key in string]: CSSProperties } = {
      parent: {
        display: "flex",
        flexDirection: "column",
      },
      row: {
        flex:1,
        // backgroundColor: "#00ffff",
        display: "flex",
        padding: 0,
        margin: 0,
      },
      lines: {
        padding: 0,
        margin: 0,
        flexBasis: "20%",
      },
      content: {
        // backgroundColor: "#ff00ff",
        flexGrow: 1,
      },
    }


    const { ride, guideStore } = this.props
    const key = ride ? ride.id : randomKey()
    const isSelected = guideStore.selectedId === key
    return <div
      key={key}
      style={styles.parent}
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
    >
      <div style={{ ...styles.row }}>
        <div style={{ ...styles.lines }}><StageRideLine ride={ride}/></div>
        <div style={{
          ...styles.content,
          alignSelf: "center",
        }}>
          <Header>{humanDistance(ride.distanceMeters, true)}</Header>
          <Header>{humanDuration(ride.durationSeconds, true)}</Header>
        </div>
      </div>

    </div>
  }
}
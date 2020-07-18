import * as React from "react"
import { RideFragment } from "api/generated"
import GuideStore from "model/GuideStore"
import StageRideLine from "../StageList/StageRideLine"
import StageSpotLine from "../StageList/StageSpotLine"
import { Button, Flag, FlagNameValues, Grid, GridColumn, GridRow, Header, Icon } from "semantic-ui-react"
import { CSSProperties } from "react"
import { humanDistance, humanDuration } from "../../../../../utils/human"

type Props = {
  ride: RideFragment
  guideStore: GuideStore
  close: () => void
}

export default class RideDetail extends React.Component<Props> {

  render(): React.ReactElement {
    const ride = this.props.ride
    const fromSpot = this.props.ride.fromSpot
    const toSpot = this.props.ride.toSpot


    const styles: { [key in string]: CSSProperties } = {
      parent: {
        display: "flex",
        flexDirection: "column",
      },
      row: {
        flex:1,
        display: "flex",
        padding: 0,
        margin: 0,
      },
      lines: {
        // backgroundColor: "#ffff00",
        padding: 0,
        margin: 0,
        flexBasis: "20%",
      },
      content: {
        // backgroundColor: "#ff00ff",
        flexGrow: 1,
      },
    }

    return <div style={styles.parent}>
      <div style={{ ...styles.row, padding: "1em" }}>
        <Button basic icon onClick={() => {
          this.props.guideStore.unselect()
        }}><Icon name={"chevron left"}/> Back</Button>
      </div>
      <div style={{ ...styles.row }}>
        <div style={{ ...styles.lines }}>
          <StageSpotLine spot={fromSpot} position={"first"}/>
        </div>
        <div style={{
          ...styles.content,
          alignSelf: "center",
        }}>
          <Header>
            <Header.Content>
              {fromSpot.name}
              <Header.Subheader><Flag name={fromSpot.country?.toLowerCase() as FlagNameValues}/>
                {`${fromSpot.name === fromSpot.location ? "" : fromSpot.location + ", "}${fromSpot.country}`}
              </Header.Subheader>
            </Header.Content>
          </Header>
        </div>
      </div>

      <div style={{ ...styles.row }}>
        <div style={{ ...styles.lines }}>
          <StageRideLine ride={ride}/>
        </div>

        <div style={{
          ...styles.content,
          alignSelf: "center",
        }}>
          <Header>{humanDistance(ride.distanceMeters, true)}</Header>
          <Header>{humanDuration(ride.durationSeconds, true)}</Header>
        </div>
      </div>

      <div style={styles.row}>
        <div style={styles.lines}>
          <StageSpotLine spot={toSpot} position={"last"}/>
        </div>
        <div style={{
          ...styles.content,
          alignSelf: "center",
        }}>
          <Header>
            <Header.Content>
              {toSpot.name}
              <Header.Subheader><Flag name={toSpot.country?.toLowerCase() as FlagNameValues}/>
                {`${toSpot.name === toSpot.location ? "" : toSpot.location + ", "}${toSpot.country}`}
              </Header.Subheader>
            </Header.Content>
          </Header>
        </div>
      </div>
    </div>
  }
}


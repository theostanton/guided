import { SpotFragment } from "api/generated"
import React, { CSSProperties } from "react"
import { Flag, Label, Icon, Divider, FlagNameValues, Header, GridColumn, Grid } from "semantic-ui-react"
import GuideStore from "model/GuideStore"
import { humanDate, humanTemperature } from "utils/human"
import StageSpotLine, { ListPosition } from "./StageSpotLine"

type Props = {
  spot: SpotFragment
  position: ListPosition
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


    const styles: { [key in string]: CSSProperties } = {
      parent: {
        // display: "flex",
        // flexDirection: "column",
      },
      row: {
        // flex:1,
        // backgroundColor: "#00ffff",
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

    const { spot, guideStore } = this.props
    const isSelected = guideStore.selectedId === spot.id
    return <div style={styles.parent}
                key={spot.id}
                onClick={() => {
                  guideStore.selectSpot(spot.id!)
                }}
                onMouseEnter={() => {
                  guideStore.highlightSpot(spot.id)
                }}
                onMouseLeave={() => {
                  guideStore.unhighlight()
                }}>
      <div style={{ ...styles.row }}>
        <div style={{ ...styles.lines }}>
          <StageSpotLine spot={spot} position={this.props.position}/>
        </div>
        <div style={{
          ...styles.content,
          alignSelf: "center",
        }}>
          <Header>
            <Header.Content>
              {spot.name}
              <Header.Subheader><Flag name={spot.country?.toLowerCase() as FlagNameValues}/>
                {`${spot.name === spot.location ? "" : spot.location + ", "}${spot.country}`}
              </Header.Subheader>
            </Header.Content>
          </Header>
        </div>
      </div>
    </div>
  }

}
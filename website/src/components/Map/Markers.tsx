import { Guide } from "model"
import React from "react"
import { Spot } from "../../api/generated"
import { Icon, SemanticCOLORS } from "semantic-ui-react"
import { Marker } from "react-map-gl"

type Props = {
  guide: Guide
}

type State = {}

export class Markers extends React.Component<Props, State> {

  createMarker(spot: Partial<Spot>, index: number, onDragEnd: any): React.ReactElement {

    const pinStyle = {
      cursor: "pointer",
      fill: "#000",
      stroke: "none",
    }

    let color: SemanticCOLORS
    // if (this.props === spot.id) {
    //   color = 'red'
    // } else
    if (spot.locked === true) {
      color = "black"
    } else {
      color = "grey"
    }

    return <Marker key={`spot-${spot.id}`}
                   longitude={spot.long!}
                   latitude={spot.lat!}
                   draggable
                   onDragEnd={async (args) => {
                     // await onDragEnd(args, spot.location.id)
                   }}

    >

      <Icon name={"marker"}
            color={color}
            style={{
              ...pinStyle,
            }}

            onMouseEnter={() => {
              this.setState({
                showPopupForId: spot.id,
              })
            }}
            onMouseLeave={() => {
              this.setState({
                showPopupForId: undefined,
              })
            }}
      />
    </Marker>
  }

  render() {
    const spots: Pick<Spot, "label" | "lat" | "long" | "locked" | "nights">[] = this.props.guide.spotsByGuide.nodes

    return spots.map((spot, index) => {
      return (this.createMarker(spot, index, () => {

      }))
    })
  }
}
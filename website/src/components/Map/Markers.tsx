import React from "react"
import { Spot, SpotByGuideFragment } from "../../api/generated"
import { Icon, SemanticCOLORS } from "semantic-ui-react"
import { Marker } from "react-map-gl"
import GuideStore from "../../model/GuideStore"
import { inject, observer } from "mobx-react"
import { log } from "@guided/logger"

type Props = {
  guideStore?: GuideStore
}


@inject("guideStore")
@observer
export class Markers extends React.Component<Props, {}> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  createMarker(spot: SpotByGuideFragment, index: number, onDragEnd: any): React.ReactElement {

    const pinStyle = {
      cursor: "pointer",
      fill: "#000",
      stroke: "none",
    }

    let color: SemanticCOLORS
    if (this.guideStore.selectedId === spot.id) {
      color = "red"
    } else if (this.guideStore.highlightedId === spot.id) {
      color = "green"
    } else if (spot.locked === true) {
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

    return this.guideStore.guide!.spotsByGuide.nodes.map((spot, index) => {
      return (this.createMarker(spot!, index, () => {

      }))
    })
  }
}
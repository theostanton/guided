import React from "react"
import { MoveSpotDocument, MoveSpotMutationVariables, SpotByGuideFragment } from "api/generated"
import { Icon, SemanticCOLORS } from "semantic-ui-react"
import { Marker } from "react-map-gl"
import GuideStore from "model/GuideStore"
import { inject, observer } from "mobx-react"
import { client } from "api"

type Props = {
  guideStore?: GuideStore
}


@inject("guideStore")
@observer
export class Markers extends React.Component<Props, {}> {

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  async moveSpot(spotId: string, lat: number, long: number): Promise<void> {
    const variables: MoveSpotMutationVariables = {
      spotId, lat, long,
    }
    await client.mutate({
      mutation: MoveSpotDocument,
      variables,
    })
    this.props.guideStore?.refetch()
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
    } else if (spot.locked) {
      color = "black"
    } else {
      color = "grey"
    }

    return <Marker key={`spot-${spot.id}`}
                   longitude={spot.long!}
                   latitude={spot.lat!}
                   draggable
                   offsetLeft={-30}
                   offsetTop={-53}
                   onDragEnd={async (args) => {
                     await this.moveSpot(spot.id, args.lngLat[1], args.lngLat[0])
                   }}

    >

      <Icon name={"marker"}
            color={color}
            size={"huge"}
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
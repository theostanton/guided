import React from "react"
import {
  MoveSpotDocument,
  MoveSpotMutationVariables, RideFragment, SpotFragment,
} from "api/generated"
import { Icon, SemanticCOLORS } from "semantic-ui-react"
import { Marker } from "react-map-gl"
import GuideStore from "model/GuideStore"
import { inject, observer } from "mobx-react"
import { client } from "api"
import { logInfo } from "../../../../../backend/tools/logger/src"

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
  }

  createFlag(spot: SpotFragment, isOwner: boolean): React.ReactElement {

    const pinStyle = {
      cursor: "pointer",
      fill: "#000",
      stroke: "none",
    }

    let color: SemanticCOLORS
    const selectedRide: RideFragment | undefined = this.guideStore.selectedRide
    if (selectedRide && selectedRide.toSpot!.id === spot.id) {
      color = "red"
    } else if (selectedRide && selectedRide.fromSpot!.id === spot.id) {
      color = "green"
    } else if (selectedRide) {
      color = "grey"
    } else if (this.guideStore.selectedId === spot.id) {
      color = "orange"
    } else if (this.guideStore.highlightedId === spot.id) {
      color = "yellow"
    } else if (spot.locked) {
      color = "black"
    } else {
      color = "grey"
    }

    const onDragEnd = (async (args) => {
      await this.moveSpot(spot.id, args.lngLat[1], args.lngLat[0])
    })

    return <Marker key={`spot-${spot.id}`}
                   longitude={spot.long!}
                   latitude={spot.lat!}
                   draggable={isOwner}
                   offsetLeft={-10}
                   offsetTop={-25}
                   onDragEnd={onDragEnd}
    >

      <Icon name={spot.locked ? "flag" : "flag outline"}
            color={color}
            size={"big"}
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

    const isOwner = this.props.guideStore.isOwner
    return this.guideStore.spots.map((spot, index) => {
      return (this.createFlag(spot!, isOwner))
    })
  }
}
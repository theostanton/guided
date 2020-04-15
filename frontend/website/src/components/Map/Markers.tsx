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
import { RIDE_COLOURS, SPOT_COLOURS, SpotColourStatus } from "../../utils/colours"
import { log } from "../../utils/logger"

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

  fill(status: SpotColourStatus): string {
    switch (status) {
      case "start":
        return SPOT_COLOURS[status]
      case "end":
        return SPOT_COLOURS[status]
      default:
        return "white"
    }
  }

  stroke(status: SpotColourStatus): string {
    switch (status) {
      case "start":
      case "end":
        return RIDE_COLOURS["selected"]
      default:
        return SPOT_COLOURS[status]
    }
  }

  position(spot: SpotFragment): string | undefined {
    if (spot.locked) {
      return (parseInt(spot.position.split(".")[0]) + 1).toString()
    }
  }

  createFlag(spot: SpotFragment, isOwner: boolean): React.ReactElement {

    const status = this.props.guideStore.spotStatus(spot.id)

    const onDragEnd = (async (args) => {
      await this.moveSpot(spot.id, args.lngLat[1], args.lngLat[0])
    })

    const SIZE = 40
    const STROKE = 5

    const position = this.position(spot)

    return <Marker key={`spot-${spot.id}`}
                   longitude={spot.long!}
                   latitude={spot.lat!}
                   draggable={isOwner}
                   offsetLeft={-SIZE / 2}
                   offsetTop={-SIZE / 2}
                   onDragEnd={onDragEnd}
    >
      <svg style={{ width: SIZE, height: SIZE }}
           onMouseOver={() => {
             this.guideStore.highlightSpot(spot.id)
           }}
           onMouseOut={() => {
             this.guideStore.unhighlight()
           }}
           onClick={() => {
             this.guideStore.selectSpot(spot.id)
           }}>
        <circle cx={SIZE / 2}
                cy={SIZE / 2}
                r={SIZE / 2 - 2 * STROKE}
                fill={this.fill(status)}
                stroke={this.stroke(status)}
                strokeWidth={5}/>
        {position &&
        <text x={SIZE / 2} y={SIZE / 2} fill={this.stroke(status)} dy=".33em"
              textAnchor="middle">{position}</text>
        }
      </svg>
    </Marker>
  }

  render() {

    const isOwner = this.props.guideStore.isOwner
    return this.guideStore.spots.map((spot, index) => {
      return (this.createFlag(spot!, isOwner))
    })
  }
}
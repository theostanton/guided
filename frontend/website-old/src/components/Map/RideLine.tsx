import React, { CSSProperties } from "react"
import { Layer, Source } from "react-map-gl"
import { inject, observer } from "mobx-react"
import GuideStore from "../../model/GuideStore"
import { RIDE_COLOURS, RideColourStatus } from "utils/colours"
import { RideFragment } from "api/generated"
import { LinePaint } from "mapbox-gl"

type Props = {
  ride: RideFragment
  guideStore?: GuideStore
}

@inject("guideStore")
@observer
export class RideLine extends React.Component<Props> {

  get status(): RideColourStatus {
    return this.props.guideStore.rideStatus(this.props.ride.id)
  }

  get paint(): LinePaint {
    const status = this.status
    return {
      "line-color": RIDE_COLOURS[status],
      "line-width": 5,
      "line-opacity": status === "dim" ? 0.5 : 1.0,
    }
  }

  render(): React.ReactElement {
    const ride = this.props.ride
    if (!ride.pathUrl) {
      return null
    }
    const layerId = `ride-layer-${ride.id}`
    const sourceId = `ride-source-${ride.id}`
    return (
      <Source key={sourceId} id={sourceId} type='geojson' data={ride.pathUrl}>
        <Layer key={layerId} paint={this.paint} type={"line"}/>
      </Source>
    )
  }
}
import React from "react"
import { Layer, Source } from "react-map-gl"
import { RIDE_COLOURS, RideColourStatus } from "utils/colours"
import { RideFragment } from "api/generated"
import { LinePaint } from "mapbox-gl"

type Props = {
  ride: RideFragment
}

export class GuideItemRideLine extends React.Component<Props> {

  get paint(): LinePaint {
    return {
      "line-color": RIDE_COLOURS["none"],
      "line-width": 3,
      "line-opacity": 1.0,
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
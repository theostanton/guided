import React from 'react';
import {Layer, Source} from 'react-map-gl';
import {RideLineProps} from "./types";
import {LinePaint} from "mapbox-gl";
import {itemStateColor} from "styles/colors";

export default class RideLine extends React.Component<RideLineProps> {

  get paint(): LinePaint {
    return {
      "line-color": itemStateColor(this.props.state),
      "line-width": 5,
      "line-opacity": 0.5,
      "line-blur": 0.5
    }
  }

  render() {
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

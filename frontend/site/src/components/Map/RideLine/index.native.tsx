import React from 'react';
import {RideLineProps} from "./types";
import MapboxGL, {LineLayerStyle} from '@react-native-mapbox-gl/maps';
import {StyleProp} from "react-native";
import {itemStateColor} from "styles/colors";

export default class RideLine extends React.Component<RideLineProps> {

  get style(): StyleProp<LineLayerStyle> {
    return {
      lineColor: itemStateColor(this.props.state),
      lineWidth: 5
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
      <MapboxGL.ShapeSource key={sourceId} id={sourceId} url={ride.pathUrl}>
        <MapboxGL.LineLayer key={layerId} id={layerId}/>
      </MapboxGL.ShapeSource>
    )
  }
}

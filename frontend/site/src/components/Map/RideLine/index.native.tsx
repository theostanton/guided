import React from 'react';
import {RideLineProps} from "./types";
import {ItemState} from "screens/Guide/GuideStore/GuideMode";
import MapboxGL, {LineLayerStyle} from '@react-native-mapbox-gl/maps';
import {StyleProp} from "react-native";

const Colours: { [state in ItemState]: string } = {
  selected: '#ff0000',
  not_selected: '#00ff00',
  none: '#0000ff'
}

export default class RideLine extends React.Component<RideLineProps> {

  get style(): StyleProp<LineLayerStyle> {
    return {
      lineColor: Colours[this.props.state],
      lineWidth: 5
    }
  }

  render() {
    const ride = this.props.ride
    if (!ride.pathUrl) {
      return null
    }
    console.log('style',this.style)
    const layerId = `ride-layer-${ride.id}`
    const sourceId = `ride-source-${ride.id}`
    return (
      <MapboxGL.ShapeSource key={sourceId} id={sourceId} url={ride.pathUrl}>
        {/*<MapboxGL.LineLayer key={layerId} style={this.style}/>*/}
      </MapboxGL.ShapeSource>
    )
  }
}

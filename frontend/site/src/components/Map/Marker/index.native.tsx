import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {MarkerProps} from "./types";


export default class Marker extends React.Component<MarkerProps> {
  render() {
    return (
      <MapboxGL.PointAnnotation
        id={this.props.id}
        key={this.props.id}
        title={this.props.id}
        // @ts-ignore
        anchor={{x: 0.5, y: 1.0}}
        coordinate={[this.props.position.longitude, this.props.position.latitude]}
      >
        {this.props.children}
      </MapboxGL.PointAnnotation>
    );
  }
}
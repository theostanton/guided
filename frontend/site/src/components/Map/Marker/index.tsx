import React from 'react';
import {Marker as ReactMapGLMarker} from 'react-map-gl';
import {MarkerProps} from "./types";

export default class Marker extends React.Component<MarkerProps> {
  render() {
    return (
      <ReactMapGLMarker
        key={this.props.id}
        latitude={this.props.position.latitude}
        longitude={this.props.position.longitude}
        offsetLeft={this.props.offsetLeft || 0}
        offsetTop={this.props.offsetTop || 0}>
        {this.props.children}
      </ReactMapGLMarker>
    );
  }
}

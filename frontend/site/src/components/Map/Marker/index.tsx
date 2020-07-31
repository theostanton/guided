import React from 'react';
import {Marker as ReactMapGLMarker} from 'react-map-gl';


export default class Marker extends React.Component<MarkerProps> {
  render() {
    return (
      <ReactMapGLMarker
        key={this.props.id}
        ref={this.props.id}
        latitude={this.props.position.latitude}
        longitude={this.props.position.longitude}
        offsetLeft={0}
        offsetTop={0}>
        {this.props.children}
      </ReactMapGLMarker>
    );
  }
}

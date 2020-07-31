import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';


export default class Marker extends React.Component<MarkerProps> {
  render() {
    console.log('Marker.render')
    return (
      <MapboxGL.MarkerView
        id={this.props.id}
        coordinate={[this.props.position.longitude, this.props.position.latitude]}>
        {this.props.children}
      </MapboxGL.MarkerView>
    );
  }
}
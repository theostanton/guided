import React from "react";
import ReactMapGL, {MapboxProps} from 'react-map-gl';
import {StyleSheet} from "react-native";

const TOKEN = 'pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazhtcjZsMjEwZTNyM2xvMnh0cmg5aWh0In0.FaVZYyNvHVkT_sx-uBP4RQ'

type State = {
  mapProps: MapboxProps
}
export default class Map extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      mapProps: {
        width: '100%',
        height: '100%',
        latitude: props.latitude,
        longitude: props.longitude,
        zoom: props.zoom
      }
    }
  }

  render() {
    return (
      <ReactMapGL
        style={styles.map}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => this.setState({mapProps: viewport})}
        {...this.state.mapProps}
      >
        {this.props.children}
      </ReactMapGL>
    );
  }
}


const styles = StyleSheet.create({
  map: {},
});

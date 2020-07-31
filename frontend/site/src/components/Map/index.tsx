import React from "react";
import ReactMapGL from 'react-map-gl';
import {StyleSheet, View} from "react-native";

const TOKEN = 'pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazhtcjZsMjEwZTNyM2xvMnh0cmg5aWh0In0.FaVZYyNvHVkT_sx-uBP4RQ'

export default class Map extends React.Component {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13
    }
  };

  render() {
    return (
        <ReactMapGL
          style={styles.map}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={TOKEN}
          onViewportChange={(viewport) => this.setState({viewport})}
          {...this.state.viewport}
        />
    );
  }
}


const styles = StyleSheet.create({
  map: {
  },
});

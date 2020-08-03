import MapboxGL from "@react-native-mapbox-gl/maps";
import React from "react";
import {StyleSheet, View} from "react-native";
import {MapProps} from "./types";
import {Point} from "geojson";

MapboxGL.setAccessToken("pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazhtcjZsMjEwZTNyM2xvMnh0cmg5aWh0In0.FaVZYyNvHVkT_sx-uBP4RQ");

type State = {
  latitude: number
  longitude: number
  zoom: number
}

export default class Map extends React.Component<MapProps, State> {

  constructor(props: MapProps) {
    super(props);
    this.state = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      zoom: this.props.zoom
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <MapboxGL.MapView style={styles.map} onPress={(event,) => {
          const geometry = (event.geometry as Point)
          this.props.onClick({
            latitude: geometry.coordinates[1],
            longitude: geometry.coordinates[0],
          })
        }}>
          <MapboxGL.Camera
            zoomLevel={this.state.zoom}
            centerCoordinate={
              [this.state.longitude, this.state.latitude]
            }
          />
          {this.props.children}
        </MapboxGL.MapView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%'
  },
  map: {
    flex: 1
  }
});
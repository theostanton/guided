import MapboxGL from "@react-native-mapbox-gl/maps";
import React from "react";
import {StyleSheet, View} from "react-native";
import {MapProps, toPosition} from "./types";
import {Point} from "geojson";
import {inject, observer} from "mobx-react";

MapboxGL.setAccessToken("pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazhtcjZsMjEwZTNyM2xvMnh0cmg5aWh0In0.FaVZYyNvHVkT_sx-uBP4RQ");

type State = {}

@inject('cameraStore')
@observer
export default class Map extends React.Component<MapProps, State> {

  cameraRef: MapboxGL.Camera

  get camera(): MapboxGL.Camera {
    return (this.cameraRef as unknown as MapboxGL.Camera)
  }

  updateCamera() {


    if(!this.cameraRef){
      console.log('cameraRef===undefined')
      return;
    }

    let camera = this.props.cameraStore.camera;
    if (camera === undefined) {
      console.log('camera===undefined')
      return
    }
    console.log('updateCamera mode=', camera.mode)
    switch (camera.mode) {
      case "bounds":
        this.camera.fitBounds(
          toPosition(camera.northEast),
          toPosition(camera.southWest),
          camera.padding)
        break
      case "centered":
        this.camera.setCamera({
          centerCoordinate: toPosition(camera.latLong),
          zoomLevel: camera.zoom
        })
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <MapboxGL.MapView style={styles.map}
                          styleURL={MapboxGL.StyleURL.Light}
                          onPress={(event,) => {
                            const geometry = (event.geometry as Point)
                            this.props.onClick({
                              latitude: geometry.coordinates[1],
                              longitude: geometry.coordinates[0],
                            })
                          }}>
          {/*<MapboxGL.Camera*/}
          {/*  ref={ref => {*/}
          {/*    this.cameraRef = ref*/}
          {/*    this.updateCamera()*/}
          {/*  }}*/}
          {/*/>*/}
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
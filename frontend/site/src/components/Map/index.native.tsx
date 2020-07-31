import MapboxGL from "@react-native-mapbox-gl/maps";
import React from "react";
import {StyleSheet, View} from "react-native";

MapboxGL.setAccessToken("pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazhtcjZsMjEwZTNyM2xvMnh0cmg5aWh0In0.FaVZYyNvHVkT_sx-uBP4RQ");

export default class Map extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <MapboxGL.MapView style={styles.map}/>
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
import MapboxGL from "@react-native-mapbox-gl/maps";
import React from "react";
import {StyleSheet, View} from "react-native";
import {Props} from "./types";
import {inject} from "mobx-react";

MapboxGL.setAccessToken("pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazhtcjZsMjEwZTNyM2xvMnh0cmg5aWh0In0.FaVZYyNvHVkT_sx-uBP4RQ");

@inject('device')
export default class GuideListItemMap extends React.Component<Props> {

  render() {
    return (
      <View style={styles.root}>
        <MapboxGL.MapView style={styles.map}
                          styleURL={MapboxGL.StyleURL.Light}>
          <MapboxGL.Camera
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
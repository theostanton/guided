import React from "react";
import ReactMapGL from 'react-map-gl';
import {Viewport} from "components/Map/CameraStore";
import Bounds from "components/Map/Bounds";
import {generateViewport} from "components/Map/viewport";
import {icon, two} from "styles/dimensions";
import {Props} from "./types";
import {StyleSheet, View} from "react-native";
import {Context} from "app/Context";

const TOKEN = 'pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazhtcjZsMjEwZTNyM2xvMnh0cmg5aWh0In0.FaVZYyNvHVkT_sx-uBP4RQ'

export default class GuideListItemMap extends React.Component<Props> {

  static contextType = Context;

  get viewport(): Viewport | undefined {
    const bounds = Bounds.guide(this.props.guide)
    if (!bounds) {
      return
    }

    if (bounds.mode === 'centered') {
      return {
        zoom: bounds.zoom,
        longitude: bounds.latLong.longitude,
        latitude: bounds.latLong.latitude,
      }
    }

    return generateViewport(bounds, this.context!.window!.width, 200, {
      bottom: two,
      top: two + icon,
      left: two,
      right: two
    })
  }

  render() {
    return (
      <View pointerEvents={'none'} style={styles.root}>
        <ReactMapGL
          mapStyle="mapbox://styles/theodev/ckdfwq5x00w1c1isc2w08ol3z"
          mapboxApiAccessToken={TOKEN}
          width={'100%'}
          height={'100%'}
          {...this.viewport}
        >
          {this.props.children}
        </ReactMapGL>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%'
  }
})
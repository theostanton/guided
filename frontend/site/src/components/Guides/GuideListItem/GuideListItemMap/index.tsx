import React from "react";
import ReactMapGL from 'react-map-gl';
import {inject} from "mobx-react";
import {Viewport} from "components/Map/CameraStore";
import Bounds from "components/Map/Bounds";
import {generateViewport} from "components/Map/viewport";
import {icon, two} from "styles/dimensions";
import {Props} from "./types";

const TOKEN = 'pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazhtcjZsMjEwZTNyM2xvMnh0cmg5aWh0In0.FaVZYyNvHVkT_sx-uBP4RQ'

@inject('device')
export default class GuideListItemMap extends React.Component<Props> {

  get viewport(): Viewport | undefined {
    const bounds = Bounds.guide(this.props.guide)
    if (!bounds) {
      return
    }
    return generateViewport(bounds, this.props.device.window.width, 200, {
      bottom: two,
      top: two + icon,
      left: two,
      right: two
    })
  }

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/theodev/ckdfwq5x00w1c1isc2w08ol3z"
        mapboxApiAccessToken={TOKEN}
        width={'100%'}
        height={'100%'}
        {...this.viewport}
      >
        {this.props.children}
      </ReactMapGL>
    );
  }
}
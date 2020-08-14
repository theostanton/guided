import React from "react";
import ReactMapGL from 'react-map-gl';
import {MapProps} from "./types";
import {inject, observer} from "mobx-react";

const TOKEN = 'pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazhtcjZsMjEwZTNyM2xvMnh0cmg5aWh0In0.FaVZYyNvHVkT_sx-uBP4RQ'

type State = {}

@inject('cameraStore')
@observer
export default class Map extends React.Component<MapProps, State> {

  constructor(props: MapProps) {
    super(props);
    this.state = {
      mapProps: {
        width: '100%',
        height: '100%'
      },
      viewport: undefined
    }
  }

  render() {
    let viewport = this.props.cameraStore!.viewport;
    return (
      <ReactMapGL
        onClick={this.props.onClick && (async (event) => {
          await this.props.onClick!({
            longitude: event.lngLat[0],
            latitude: event.lngLat[1]
          })
        })}
        mapStyle="mapbox://styles/theodev/ckdfwq5x00w1c1isc2w08ol3z"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => {
          this.props.cameraStore?.moveViewport(viewport)
        }}
        width={'100%'}
        height={'100%'}
        {...viewport}
      >
        {this.props.children}
      </ReactMapGL>
    );
  }
}
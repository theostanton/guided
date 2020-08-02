import React from "react";
import ReactMapGL, {MapboxProps} from 'react-map-gl';
import {MapProps} from "./types";

const TOKEN = 'pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazhtcjZsMjEwZTNyM2xvMnh0cmg5aWh0In0.FaVZYyNvHVkT_sx-uBP4RQ'

type State = {
  mapProps: MapboxProps
}
export default class Map extends React.Component<MapProps, State> {

  constructor(props: MapProps) {
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
        onClick={this.props.onClick && (async (event) => {
          await this.props.onClick({
            longitude: event.lngLat[0],
            latitude: event.lngLat[1]
          })
        })}
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
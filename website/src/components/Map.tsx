import ReactMapGL, { TransitionInterpolator } from "react-map-gl"

import React, { Component } from "react"


type State = {
  viewport: {
    width: number,
    height: number,
    latitude: number,
    longitude: number,
    zoom: number
    transitionDuration?: number
    transitionInterpolator?: TransitionInterpolator
  }
};

type Props = {}


export default class Map extends Component<Props, State> {

  state: State = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 51.5007,
      longitude: -0.1246,
      zoom: 8,
    },
  }

  render(): React.ReactElement {
    return (
      <ReactMapGL
        mapboxApiAccessToken={"pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazV4bXlkN2Qwd21nM2RydnJ5NG5jdXN4In0.ph8Cr6j3AR1SUnX3bOnr-A"}
        {...this.state.viewport}
        height={"100%"}
        width={"100%"}
        onViewportChange={(viewport: any) => {
          this.setState({ viewport })
        }}
      >
      </ReactMapGL>
    )
  }
}

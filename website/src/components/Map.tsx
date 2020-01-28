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
        mapboxApiAccessToken={"sk.eyJ1IjoidGhlb2RldiIsImEiOiJjazV4bHo5MG8xYmRiM2VvMDg4bDA1M2liIn0.W4Wbygy5DJ86n6NB2VNxVg"}
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

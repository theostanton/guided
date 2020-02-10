import ReactMapGL, { TransitionInterpolator } from "react-map-gl"

import React, { Component } from "react"
import { Markers } from "./Markers"
import { AddStayFromLatLongDocument, AddStayFromLatLongMutationVariables } from "api/generated"
import { client } from "api"
import { inject, observer } from "mobx-react"
import GuideStore from "../../model/GuideStore"
import { logJson } from "@guided/logger"


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

type Props = {
  guideStore?: GuideStore
}


@inject("guideStore")
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

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  render(): React.ReactElement {
    const guide = this.guideStore.guide
    return (
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazYwanNzZGYwODZvM2xvYXFpdWswY2Y4In0.zcDbr2DXsYXS3p54swmrYg"
        {...this.state.viewport}
        height={"100%"}
        width={"100%"}
        onViewportChange={(viewport: any) => {
          this.setState({ viewport })
        }}
        onClick={async (event) => {
          logJson(event.features, "features")
          if (guide) {
            const variables: AddStayFromLatLongMutationVariables = {
              guideId: guide.id,
              lat: event.lngLat[1],
              long: event.lngLat[0],
            }

            await client.mutate({
              mutation: AddStayFromLatLongDocument,
              variables,
            })

            this.guideStore.refetch()
          }

        }}
      >
        {guide && <Markers/>}
      </ReactMapGL>
    )
  }
}

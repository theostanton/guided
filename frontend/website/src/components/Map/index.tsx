import ReactMapGL, { FlyToInterpolator, TransitionInterpolator } from "react-map-gl"

import React, { Component } from "react"
import { Markers } from "./Markers"
import { AddStayFromLatLongDocument, AddStayFromLatLongMutationVariables } from "api/generated"
import { client } from "api"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import { Rides } from "./Rides"
import WebMercatorViewport from "viewport-mercator-project"
import { logJson } from "utils/logger"

type ViewPort = {
  width: number,
  height: number,
  latitude: number,
  longitude: number,
  zoom: number
  transitionDuration?: number
  transitionInterpolator?: TransitionInterpolator
}

type State = {
  viewport?: ViewPort
  selectedRideId?: string
  selectedSpotId?: string
};

type Props = {
  guideStore?: GuideStore
}


@inject("guideStore")
@observer
export default class Map extends Component<Props, State> {

  state: State = {}

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  get viewport(): ViewPort | undefined {

    if (this.guideStore.selectedType === "ride" && this.state.selectedRideId != this.guideStore.selectedId) {
      this.state.selectedRideId = this.guideStore.selectedId
      const selectedRide = this.guideStore.selectedRide

      const north = Math.max(selectedRide!.fromSpot!.lat!, selectedRide!.toSpot!.lat!)
      const east = Math.max(selectedRide!.fromSpot!.long!, selectedRide!.toSpot!.long!)
      const south = Math.min(selectedRide!.fromSpot!.lat!, selectedRide!.toSpot!.lat!)
      const west = Math.min(selectedRide!.fromSpot!.long!, selectedRide!.toSpot!.long!)

      try {
        const { longitude, latitude, zoom } = new WebMercatorViewport(this.state.viewport)
          .fitBounds([[west, south], [east, north]], {
            padding: {
              right: 200,
              left: 200,
              top: 200,
              bottom: 200,
            },
          })

        this.state.viewport = {
          width: this.state.viewport ? this.state.viewport.width : 400,
          height: this.state.viewport ? this.state.viewport.height : 400,
          longitude,
          latitude,
          zoom,
          transitionDuration: 1000,
          transitionInterpolator: new FlyToInterpolator(),
        }
      } catch (e) {
        console.error(e)
      }
    } else if (!this.state.viewport && this.guideStore.guide) {
      const guide = this.guideStore.guide
      const viewport = new WebMercatorViewport()
      this.state.viewport = viewport.fitBounds(
        [
          [guide.bounds!.west!, guide.bounds!.south!], [
          guide.bounds!.east!, guide.bounds!.north!]],
      )
    } else if (!this.state.viewport) {
      this.state.viewport = {
        width: 400,
        height: 400,
        latitude: 51.5007,
        longitude: -0.1246,
        zoom: 8,
      }
    }
    return this.state.viewport
  }

  render(): React.ReactElement {
    const guide = this.guideStore.guide
    return (
      <ReactMapGL
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN!}
        {...this.viewport}
        height={"100%"}
        width={"100%"}
        onViewportChange={(viewport: any) => {
          if (this.guideStore.guide) {
            this.setState({ viewport })
          }
        }}
        onClick={async (event) => {
          if (guide) {
            const variables: AddStayFromLatLongMutationVariables = {
              guideId: guide.id,
              lat: event.lngLat[1],
              long: event.lngLat[0],
              nights: 1,
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
        {guide && <Rides/>}
      </ReactMapGL>
    )
  }
}

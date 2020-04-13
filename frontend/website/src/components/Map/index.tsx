import ReactMapGL, { FlyToInterpolator, Marker, TransitionInterpolator } from "react-map-gl"

import React, { Component } from "react"
import { Markers } from "./Markers"
import { AddStayFromLatLongDocument, AddStayFromLatLongMutationVariables } from "api/generated"
import { client } from "api"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import { Rides } from "./Rides"
import WebMercatorViewport from "viewport-mercator-project"
import { log, logJson } from "utils/logger"
import { Segment } from "semantic-ui-react"

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

    const padding = {
      right: window.innerWidth / 4 + 100,
      left: window.innerWidth / 4 + 100,
      top: 100,
      bottom: 100,
    }

    if (!this.guideStore) {
      return
    } else if (!this.guideStore.guide) {
      return
    } else if (this.guideStore.selectedType === "ride" && this.state.selectedRideId != this.guideStore.selectedId) {
      this.state.selectedRideId = this.guideStore.selectedId
      this.state.selectedSpotId = undefined
      const selectedRide = this.guideStore.selectedRide

      const north = Math.max(selectedRide!.fromSpot!.lat!, selectedRide!.toSpot!.lat!)
      const east = Math.max(selectedRide!.fromSpot!.long!, selectedRide!.toSpot!.long!)
      const south = Math.min(selectedRide!.fromSpot!.lat!, selectedRide!.toSpot!.lat!)
      const west = Math.min(selectedRide!.fromSpot!.long!, selectedRide!.toSpot!.long!)

      try {
        const { longitude, latitude, zoom } = new WebMercatorViewport(this.state.viewport)
          .fitBounds([[west, south], [east, north]], {
            padding,
          })

        return {
          width: window.innerWidth,
          height: window.innerHeight,
          longitude,
          latitude,
          zoom,
          transitionDuration: 1000,
          transitionInterpolator: new FlyToInterpolator(),
        }
      } catch (e) {
        console.error(e)
      }
    } else if (this.guideStore.selectedType === "spot" && this.state.selectedSpotId != this.guideStore.selectedId) {
      this.state.selectedSpotId = this.guideStore.selectedId
      this.state.selectedRideId = undefined
      const selectedSpot = this.guideStore.selectedSpot

      try {

        return {
          width: window.innerWidth,
          height: window.innerHeight,
          longitude: selectedSpot.long,
          latitude: selectedSpot.lat,
          zoom: 10,
          transitionDuration: 1000,
          transitionInterpolator: new FlyToInterpolator(),
        }
      } catch (e) {
        console.error(e)
      }
      // TODO fix guide.bounds issue on subscription
    } else if (!this.state.viewport || this.guideStore.spots.length > 0 && !this.guideStore.selectedType && (this.state.selectedSpotId || this.state.selectedRideId)) {
      this.state.selectedSpotId = undefined
      this.state.selectedRideId = undefined
      const firstSpot = this.guideStore.spots[0]
      const bounds: {
        north: number
        east: number
        south: number
        west: number
      } = {
        north: firstSpot.lat,
        east: firstSpot.long,
        south: firstSpot.lat,
        west: firstSpot.long,
      }

      this.guideStore.spots.forEach(spot => {
        bounds.north = Math.max(spot.lat, bounds.north)
        bounds.south = Math.min(spot.lat, bounds.south)
        bounds.east = Math.max(spot.long, bounds.east)
        bounds.west = Math.min(spot.long, bounds.west)
      })

      const viewport = new WebMercatorViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      }).fitBounds(
        [
          [bounds.west!, bounds.south!], [
          bounds.east!, bounds.north!]],
        {
          padding,
        },
      )
      return {
        latitude: viewport.latitude,
        longitude: viewport.longitude,
        zoom: viewport.zoom,
        width: window.innerWidth,
        height: window.innerHeight,
        transitionDuration: this.state.viewport && 1000,
        transitionInterpolator: this.state.viewport && new FlyToInterpolator(),
      }
    } else {
      return undefined
    }

  }

  updateViewport() {
    const viewport = this.viewport
    if (viewport) {
      if (this.state.viewport && this.state.viewport.latitude === viewport.longitude) {
        console.error("unnecessary viewport calculation")
      } else {
        this.setState({
          viewport,
        })
      }
    }
  }

  render(): React.ReactElement {
    if (!this.guideStore) {
      return <Segment loading/>
    }
    const guide = this.guideStore?.guide

    this.updateViewport()

    const onClick = this.props.guideStore.isOwner && (async (event) => {
      if (guide) {
        const variables: AddStayFromLatLongMutationVariables = {
          guideId: guide.id,
          long: event.lngLat[0],
          lat: event.lngLat[1],
          nights: 1,
        }

        await client.mutate({
          mutation: AddStayFromLatLongDocument,
          variables,
        })
      } else {
        console.error("Guide not loaded")
      }
    })
    return (
      <ReactMapGL
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN!}
        {...this.state.viewport}
        height={"100%"}
        width={"100%"}
        onViewportChange={(viewport: any) => {
          if (this.guideStore.guide) {
            this.setState({ viewport })
          }
        }}

        onClick={onClick}
      >
        {guide && <Markers/>}
        {guide && <Rides/>}
      </ReactMapGL>
    )
  }
}

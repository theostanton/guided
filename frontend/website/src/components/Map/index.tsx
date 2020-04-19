import ReactMapGL, { FlyToInterpolator, TransitionInterpolator } from "react-map-gl"

import React, { Component } from "react"
import { Markers } from "./Markers"
import { AddStayFromLatLongDocument, AddStayFromLatLongMutationVariables } from "api/generated"
import { client } from "api"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import { Rides } from "./Rides"
import WebMercatorViewport from "viewport-mercator-project"
import { Segment } from "semantic-ui-react"
import { generateBounds, generateViewport } from "./viewport"

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
  dragging: boolean
};

type Props = {
  guideStore?: GuideStore
}


@inject("guideStore")
@observer
export default class Map extends Component<Props, State> {

  state: State = {
    dragging: false,
  }

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  generateViewport(): ViewPort | undefined {

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

      const bounds = generateBounds(selectedRide)

      try {
        const { longitude, latitude, zoom } = generateViewport(bounds, this.state.viewport.width, this.state.viewport.height, padding)

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
    } else if (!this.state.viewport || !this.guideStore.selectedType && (this.state.selectedSpotId || this.state.selectedRideId)) {
      if (this.guideStore.spots.length < 2) {
        return
      }
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
    const viewport = this.generateViewport()
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

    let onClick
    if (guide && this.props.guideStore.isOwner) {
      onClick = (async (event) => {
        const variables: AddStayFromLatLongMutationVariables = {
          input: {
            guideId: guide.id,
            long: event.lngLat[0],
            lat: event.lngLat[1],
            nights: 1,
          },
        }

        await client.mutate({
          mutation: AddStayFromLatLongDocument,
          variables,
        })
      })
    }

    const viewport: Partial<ViewPort> = this.state.viewport || {
      longitude: -0.1278,
      latitude: 51.5074,
      zoom: 4,
    }

    return (
      <ReactMapGL
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN!}
        {...viewport}
        height={"100%"}
        width={"100%"}
        mapStyle={"mapbox://styles/theodev/ck8zy18o108v11im40uij8t14"}
        onViewportChange={(viewport: any) => {
          if (this.guideStore.guide) {
            this.setState({ viewport })
          }
        }}
        clickRadius={20}
        onClick={onClick}
      >
        {guide && <Rides/>}
        {guide && <Markers/>}
      </ReactMapGL>
    )
  }
}

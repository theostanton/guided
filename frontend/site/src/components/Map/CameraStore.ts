import {LatLong} from "./types";
import {action, computed, observable} from "mobx";
import {generateViewport} from "./viewport";
import {whole} from "../../styles/dimensions";
import {GuideFragment} from "../../api/generated";
import Bounds from "./Bounds";

export type MapPadding = {
  right: number
  top: number
  bottom: number
  left: number
}

export interface CameraBounds {
  mode: 'bounds'
  northEast: LatLong
  southWest: LatLong
}

interface CameraCentered {
  mode: 'centered'
  latLong: LatLong
  zoom: number
}

export type Viewport = {
  latitude: number,
  longitude: number,
  zoom: number
  transitionDuration?: number | "auto"
}

type MapDimensions = { width: number, height: number };
export default class CameraStore {

  @observable
  camera: CameraBounds | CameraCentered | undefined

  @observable
  padding: MapPadding = {
    top: whole,
    right: whole,
    left: whole,
    bottom: whole
  }

  @observable
  dimensions: MapDimensions = {
    width: 200,
    height: 200
  }

  constructor(dimensions: MapDimensions) {
    this.dimensions = dimensions
  }

  @action
  moveViewport(viewport: Viewport) {
    console.log('moveViewport', viewport)
  }

  @computed
  get viewport(): Viewport | {} {

    if (!this.camera) {
      return {}
    }

    switch (this.camera.mode) {
      case "bounds":
        return generateViewport(
          {
            north: this.camera.northEast.latitude,
            east: this.camera.northEast.longitude,
            south: this.camera.southWest.latitude,
            west: this.camera.southWest.longitude
          },
          this.dimensions.width,
          this.dimensions.height,
          this.padding
        )
      case "centered":
        return {
          latitude: this.camera.latLong.latitude,
          longitude: this.camera.latLong.longitude,
          zoom: this.camera.zoom
        }
    }
  }

  @action
  guideBounds(guide: GuideFragment) {
    this.camera = Bounds.guide(guide)
    console.log('guideBounds this.camera', this.camera)
  }

  @action
  center(latLong: LatLong, zoom: number) {
    this.camera = {
      mode: 'centered',
      zoom,
      latLong,
    }
  }

  @action
  updatePadding(patch: Partial<MapPadding>) {
    console.log('updatePadding', patch)
    this.padding = {
      ...this.padding,
      ...patch
    }
  }
}
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

const TRANSITION_DURATION = 667

type MapDimensions = { width: number, height: number };
export default class CameraStore {

  @observable
  lastViewport: Viewport | undefined

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
    this.lastViewport = viewport
  }

  @computed
  get viewport(): Viewport | {} {

    if (!this.camera) {
      return {}
    }

    if (this.lastViewport) {
      return this.lastViewport
    }

    switch (this.camera.mode) {
      case "bounds":
        const generated = generateViewport(
          this.camera,
          this.dimensions.width,
          this.dimensions.height,
          this.padding
        )
        return {
          ...generated,
          transitionDuration: TRANSITION_DURATION,
        }
      case "centered":
        return {
          latitude: this.camera.latLong.latitude,
          longitude: this.camera.latLong.longitude,
          zoom: this.camera.zoom,
          transitionDuration: TRANSITION_DURATION,
        }
    }
  }

  @action
  guideBounds(guide: Pick<GuideFragment, 'spots'>) {
    this.lastViewport = undefined
    this.camera = Bounds.guide(guide)
  }

  @action
  center(latLong: LatLong, zoom: number) {
    this.lastViewport = undefined
    this.camera = {
      mode: 'centered',
      zoom,
      latLong,
    }
  }

  @action
  updatePadding(patch: Partial<MapPadding>) {
    this.lastViewport = undefined
    this.padding = {
      ...this.padding,
      ...patch
    }
  }
}
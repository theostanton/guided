import isTouchDevice from 'is-touch-device'
import {action, observable} from "mobx";

export type Orientation = 'landscape' | 'portrait'

export default class Device {

  orientation: Orientation | undefined
  isTouch: boolean

  constructor() {
    this.isTouch = isTouchDevice()
  }

  updateOrientation(orientation: Orientation) {
    this.orientation = orientation
  }

  isLandscape(): boolean {
    return this.orientation === 'landscape'
  }

}
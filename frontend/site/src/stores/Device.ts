import isTouchDevice from 'is-touch-device'
import {ScaledSize} from "react-native";

export type Orientation = 'landscape' | 'portrait'

export default class Device {

  orientation: Orientation | undefined
  isTouch: boolean
  window: ScaledSize | undefined

  constructor() {
    this.isTouch = isTouchDevice()
  }

  isLandscape(): boolean {
    return this.orientation === 'landscape'
  }

  update(window: ScaledSize) {
    this.window = window
    this.orientation = window.width / window.height > 0.85 ? 'landscape' : 'portrait'
  }
}
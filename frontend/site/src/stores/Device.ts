import {ScaledSize} from "react-native";

export type Orientation = 'landscape' | 'portrait'

export default class Device {

  orientation: Orientation | undefined
  window: ScaledSize | undefined

  isLandscape(): boolean {
    return this.orientation === 'landscape'
  }

  update(window: ScaledSize) {
    this.window = window
    this.orientation = window.width / window.height > 0.85 ? 'landscape' : 'portrait'
  }
}
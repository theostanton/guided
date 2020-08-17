import * as React from "react";
import {ScaledSize} from "react-native";

export type Orientation = 'landscape' | 'portrait'

export class AppContext {

  _orientation: Orientation | undefined
  _window: ScaledSize | undefined

  constructor(window: ScaledSize | undefined) {
    if (window) {
      this._window = window
      this._orientation = window.width / window.height > 0.85 ? 'landscape' : 'portrait'
    }
  }

  get orientation(): Orientation {
    if (this._orientation) {
      return this._orientation
    }
    throw new Error(`AppContext orientation not initialised yet`)
  }

  get window(): ScaledSize {
    if (this._window) {
      return this._window
    }
    throw new Error(`AppContext window not initialised yet`)
  }

  isLandscape(): boolean {
    return this.orientation === 'landscape'
  }

  isPortrait(): boolean {
    return this.orientation === 'portrait'
  }
}

export const Context = React.createContext<AppContext>(new AppContext(undefined));

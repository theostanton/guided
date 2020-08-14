import * as React from "react";
import {ScaledSize} from "react-native";

export type Orientation = 'landscape' | 'portrait'

export class AppContext {

  orientation: Orientation | undefined
  window: ScaledSize | undefined

  isLandscape(): boolean {
    return this.orientation === 'landscape'
  }

  isPortrait(): boolean {
    return this.orientation === 'portrait'
  }

  update(window: ScaledSize) {
    this.window = window
    this.orientation = window.width / window.height > 0.85 ? 'landscape' : 'portrait'
  }
}

export const Context = React.createContext<AppContext>(new AppContext());

import { TransitionInterpolator } from "react-map-gl";
import React, { Component } from "react";
declare type State = {
    viewport: {
        width: number;
        height: number;
        latitude: number;
        longitude: number;
        zoom: number;
        transitionDuration?: number;
        transitionInterpolator?: TransitionInterpolator;
    };
};
declare type Props = {};
export default class Map extends Component<Props, State> {
    state: State;
    render(): React.ReactElement;
}
export {};
//# sourceMappingURL=Map.d.ts.map
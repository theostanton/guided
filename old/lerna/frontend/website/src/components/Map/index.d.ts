import { TransitionInterpolator } from "react-map-gl";
import React, { Component } from "react";
import { Store } from "../../stores/Store";
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
declare type Props = {
    store: Store;
};
export default class Map extends Component<Props, State> {
    state: State;
    componentDidMount(): void;
    render(): React.ReactElement;
}
export {};
//# sourceMappingURL=index.d.ts.map
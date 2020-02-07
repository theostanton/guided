import React from "react";
import { Guide, Stay } from "@guided/common";
declare type Props = {
    highlightedId: string | undefined;
    guide?: Guide;
};
declare type State = {
    showPopupForId: string | undefined;
};
export declare class Markers extends React.Component<Props, State> {
    constructor(props: Props);
    createMarker(stay: Stay, index: number, onDragEnd: any): React.ReactElement;
    onDragEnd({ lngLat }: any, locationId: string): Promise<void>;
    render(): JSX.Element | (false | JSX.Element)[][];
}
export {};
//# sourceMappingURL=Markers.d.ts.map
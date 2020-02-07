import React, { ReactElement } from "react";
import { Ride } from "@guided/common";
import { Store } from "../../stores/Store";
declare type Props = {
    ride: Ride;
    store: Store;
    isSelected: boolean;
    selectRide: (ride: Ride) => void;
};
export default class RideItem extends React.Component<Props> {
    render(): ReactElement;
}
export {};
//# sourceMappingURL=RideItem.d.ts.map
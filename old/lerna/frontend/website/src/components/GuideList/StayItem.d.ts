import React, { ReactElement } from "react";
import { Stay } from "@guided/common";
import { Store } from "../../stores/Store";
declare type Props = {
    stay: Stay;
    store: Store;
    isSelected: boolean;
};
export default class StayItem extends React.Component<Props> {
    render(): ReactElement;
    private deleteStay;
}
export {};
//# sourceMappingURL=StayItem.d.ts.map
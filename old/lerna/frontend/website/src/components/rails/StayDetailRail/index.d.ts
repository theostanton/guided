import React from "react";
import { Store } from "../../../stores/Store";
import { Stay } from "@guided/common";
declare type Props = {
    store: Store;
};
declare type State = {
    stay?: Stay;
    loading: boolean;
};
export declare class StayDetailRail extends React.Component<Props, State> {
    componentDidMount(): void;
    componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
    toggleLocked: () => void;
    onLabelChange: (value: string) => void;
    onNightsChange: (value: string) => void;
    hasChanges(): boolean;
    onSubmit(): Promise<void>;
    render(): React.ReactElement;
}
export {};
//# sourceMappingURL=index.d.ts.map
import * as React from "react";
import { GuideInput } from "api/generated";
declare type Props = {
    owner: string;
    onClose: () => void;
};
declare type State = {
    stage: "valid" | "invalid" | "creating" | "error";
    open: boolean;
    guideInfo: Partial<GuideInput>;
};
export default class GuideDetailsModalComponent extends React.Component<Props, State> {
    state: State;
    update(key: "title", value: string): void;
    create(): Promise<void>;
    close(): void;
    render(): React.ReactElement;
}
export {};
//# sourceMappingURL=GuideDetailsModal.d.ts.map
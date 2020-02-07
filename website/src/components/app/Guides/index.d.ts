import * as React from "react";
import AuthStore from "model/AuthStore";
import GuideStore from "model/GuideStore";
declare type Props = {
    authStore: AuthStore;
    guideStore: GuideStore;
};
declare type State = {
    inc: number;
    showCreateModal: boolean;
};
export default class GuidesComponent extends React.Component<Props, State> {
    state: State;
    render(): React.ReactElement | undefined;
}
export {};
//# sourceMappingURL=index.d.ts.map
import * as React from "react";
import AuthStore from "model/AuthStore";
import GuideStore from "model/GuideStore";
declare type Props = {
    guideStore: GuideStore;
    authStore: AuthStore;
    slug?: string;
};
declare type State = {};
export default class GuideComponent extends React.Component<Props, State> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement | undefined;
}
export {};
//# sourceMappingURL=index.d.ts.map
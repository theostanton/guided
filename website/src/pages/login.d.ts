import * as React from "react";
import AuthStore from "../model/AuthStore";
declare type Props = {
    authStore: AuthStore;
};
declare type State = {
    email: string;
    password: string;
    loading: boolean;
    error: any | undefined;
};
export default class LoginComponent extends React.Component<Props, State> {
    state: State;
    logIn(): Promise<void>;
    render(): React.ReactElement | undefined;
}
export {};
//# sourceMappingURL=login.d.ts.map
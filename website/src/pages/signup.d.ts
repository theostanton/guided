import * as React from "react";
import AuthStore from "model/AuthStore";
declare type Stage = "enter" | "error" | "submitting" | "validate" | "validating";
declare type Props = {
    authStore: AuthStore;
};
declare type Errors = {
    password?: string | undefined;
    email?: string | undefined;
    username?: string | undefined;
    message?: string | undefined;
};
declare type Field = "email" | "username" | "password";
declare type State = {
    fields: {
        [field in Field]: string;
    };
    accept: boolean;
    stage: Stage;
    validationCode: string | undefined;
    errors: Errors;
};
export default class SignUpComponent extends React.Component<Props, State> {
    state: State;
    checkErrors(): Errors | undefined;
    signUp(): Promise<void>;
    updateValue(field: Field, value: string): void;
    validateEmail(): Promise<void>;
    render(): React.ReactElement | undefined;
}
export {};
//# sourceMappingURL=signup.d.ts.map
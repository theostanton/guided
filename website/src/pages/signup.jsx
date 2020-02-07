"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const Layout_1 = __importDefault(require("components/root/Layout"));
const gatsby_1 = require("gatsby");
const mobx_react_1 = require("mobx-react");
const PATTERNS = {
    email: {
        message: "Please enter a valid email",
        pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+))/,
    },
    password: {
        message: "Password must be at least 8 letters long",
        pattern: /^(.){8,64}$/,
    },
    username: {
        message: "Username can only contain lower case letters, numbers and dashes",
        pattern: /^[a-z0-9-]+$/,
    },
};
let SignUpComponent = class SignUpComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            fields: {
                email: "",
                username: "",
                password: "",
            },
            accept: false,
            validationCode: undefined,
            errors: {},
            stage: "enter",
        };
    }
    checkErrors() {
        let hasErrors = false;
        const errors = {};
        Object.keys(PATTERNS).forEach((field) => {
            const { message, pattern } = PATTERNS[field];
            const match = this.state.fields[field].match(pattern);
            if (!match) {
                hasErrors = true;
                errors[field] = message;
            }
        });
        if (hasErrors) {
            return errors;
        }
    }
    async signUp() {
        const { fields: { password, email, username }, accept } = this.state;
        const errors = this.checkErrors();
        if (errors) {
            this.setState({ errors, stage: "error" });
        }
        else if (accept) {
            this.setState({ stage: "submitting" });
            try {
                await this.props.authStore.signUp(username, email, password);
                this.setState({ stage: "validate", errors: {} });
            }
            catch (e) {
                console.error(e);
                this.setState({ errors: { message: e.message }, stage: "error" });
            }
        }
        else {
            this.setState({
                stage: "error",
                errors: {
                    message: "You must accept terms and conditions",
                },
            });
        }
    }
    updateValue(field, value) {
        const errors = this.state.errors;
        if (errors[field]) {
            if (!value.match(PATTERNS[field].pattern)) {
                errors[field] = PATTERNS[field].message;
            }
        }
        const fields = this.state.fields;
        fields[field] = value;
        this.setState({ fields, errors, stage: "enter" });
    }
    async validateEmail() {
        const { fields: { email }, validationCode } = this.state;
        try {
            await this.props.authStore.confirmSignUp(email, validationCode);
            await gatsby_1.navigate("/app");
        }
        catch (e) {
            console.error(e);
            this.setState({ stage: "error", errors: { message: e.message } });
        }
    }
    render() {
        if (this.props.authStore.isLoggedIn) {
            try {
                gatsby_1.navigate("/app").then().catch();
                return;
            }
            catch (e) {
                console.error(e);
            }
        }
        const { fields: { password, email, username }, accept, errors, stage, validationCode } = this.state;
        return <Layout_1.default>
      <semantic_ui_react_1.Container text style={{ marginTop: "2em" }}>
        <semantic_ui_react_1.Form error={stage === "error"}>
          <semantic_ui_react_1.Form.Input label="Username" icon='user' error={errors["username"]} iconPosition='left' value={username} onChange={(e, { value }) => {
            this.updateValue("username", value);
        }}/>
          <semantic_ui_react_1.Form.Input label="Email" icon='mail' iconPosition='left' error={errors["email"]} value={email} type={"email"} onChange={(e, { value }) => {
            this.updateValue("email", value);
        }}/>
          <semantic_ui_react_1.Form.Input label={"Password"} value={password} error={errors["password"]} icon='lock' iconPosition='left' type={"password"} onChange={(e, { value, error }) => {
            this.updateValue("password", value);
        }}/>
          <semantic_ui_react_1.Form.Checkbox label='I agree to the Terms and Conditions' checked={accept} onChange={((event, { checked }) => {
            this.setState({ accept: checked || false, stage: "enter" });
        })}/>

          {errors.message && <semantic_ui_react_1.Message error header={"Error"} content={errors.message}/>}

          <semantic_ui_react_1.Button type='submit' active={stage === "enter"} loading={stage === "submitting"} onClick={async () => {
            await this.signUp();
        }}>Sign up</semantic_ui_react_1.Button>
        </semantic_ui_react_1.Form>

        {(stage === "validate" || stage === "validating") && <semantic_ui_react_1.Modal open={true}>
          <semantic_ui_react_1.Modal.Header>Validate your email</semantic_ui_react_1.Modal.Header>
          <semantic_ui_react_1.Modal.Content>
            <semantic_ui_react_1.Input label={"Validation code"} onChange={(e, { value }) => {
            this.setState({ validationCode: value });
        }}/>
          </semantic_ui_react_1.Modal.Content>

          <semantic_ui_react_1.Modal.Actions>
            <semantic_ui_react_1.Button positive loading={stage === "validating"} active={validationCode !== undefined && validationCode.length > 0} onClick={async () => {
            await this.validateEmail();
        }}>
              Continue
            </semantic_ui_react_1.Button>
          </semantic_ui_react_1.Modal.Actions>
        </semantic_ui_react_1.Modal>}
      </semantic_ui_react_1.Container>
    </Layout_1.default>;
    }
};
SignUpComponent = __decorate([
    mobx_react_1.inject("authStore")
], SignUpComponent);
exports.default = SignUpComponent;
//# sourceMappingURL=signup.jsx.map
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
let LoginComponent = class LoginComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            email: "",
            password: "",
            error: undefined,
            loading: false,
        };
    }
    async logIn() {
        const { password, email } = this.state;
        this.setState({ loading: true });
        try {
            await this.props.authStore.login(email, password);
            await gatsby_1.navigate("/app");
        }
        catch (e) {
            console.error(e);
            this.setState({ error: e, loading: false });
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
        const { password, email, error, loading } = this.state;
        return <Layout_1.default>
      <semantic_ui_react_1.Container text style={{ marginTop: "2em" }}>
        <semantic_ui_react_1.Form error={error !== undefined}>
          <semantic_ui_react_1.Form.Input label={"Email"} icon='mail' iconPosition='left' value={email} onChange={(e, { value }) => {
            this.setState({ email: value, error: undefined });
        }}/>
          <semantic_ui_react_1.Form.Input label={"Password"} value={password} icon='lock' iconPosition='left' type={"password"} onChange={(e, { value, error }) => {
            this.setState({ password: value, error: undefined });
        }}/>
          {error && <semantic_ui_react_1.Message error header={"Error"} content={error.message}/>}

          <semantic_ui_react_1.Button type='submit' active={!error} loading={loading} onClick={async () => {
            await this.logIn();
        }}>Log in</semantic_ui_react_1.Button>
        </semantic_ui_react_1.Form>
      </semantic_ui_react_1.Container>
    </Layout_1.default>;
    }
};
LoginComponent = __decorate([
    mobx_react_1.inject("authStore")
], LoginComponent);
exports.default = LoginComponent;
//# sourceMappingURL=login.jsx.map
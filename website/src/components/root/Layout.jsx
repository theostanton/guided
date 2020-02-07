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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const gatsby_1 = require("gatsby");
const semantic_ui_react_1 = require("semantic-ui-react");
const mobx_react_1 = require("mobx-react");
let RootLayoutComponent = class RootLayoutComponent extends React.Component {
    render() {
        const { children } = this.props;
        const loggedIn = this.props.authStore.isLoggedIn;
        return (<semantic_ui_react_1.Container style={{ margin: 20 }}>
        <semantic_ui_react_1.Menu attached={true} borderless={true}>
          {!loggedIn &&
            <semantic_ui_react_1.Menu.Menu position='right'>
            <semantic_ui_react_1.Menu.Item name='Login'><gatsby_1.Link to={"/login"}>Login</gatsby_1.Link></semantic_ui_react_1.Menu.Item>
            <semantic_ui_react_1.Menu.Item name='Signup'><gatsby_1.Link to={"/signup"}>Signup</gatsby_1.Link></semantic_ui_react_1.Menu.Item>
          </semantic_ui_react_1.Menu.Menu>}
          {loggedIn &&
            <semantic_ui_react_1.Menu.Menu position='right'>
            <semantic_ui_react_1.Menu.Item name='Dashboard' onClick={async () => {
                await gatsby_1.navigate("/app");
            }}/>
            <semantic_ui_react_1.Menu.Item name='Logout' onClick={async () => {
                await this.props.authStore.logOut();
            }}/>
          </semantic_ui_react_1.Menu.Menu>}
        </semantic_ui_react_1.Menu>
        {children}
      </semantic_ui_react_1.Container>);
    }
};
RootLayoutComponent = __decorate([
    mobx_react_1.inject("authStore"),
    mobx_react_1.observer
], RootLayoutComponent);
exports.default = RootLayoutComponent;
//# sourceMappingURL=Layout.jsx.map
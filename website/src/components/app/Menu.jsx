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
const semantic_ui_react_1 = require("semantic-ui-react");
const gatsby_1 = require("gatsby");
const mobx_react_1 = require("mobx-react");
let AppMenu = class AppMenu extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        const user = this.props.authStore.user;
        return (<semantic_ui_react_1.Menu attached={true} borderless={true}>
        <semantic_ui_react_1.Menu.Item name={"Home"} link={true} onClick={async () => {
            await gatsby_1.navigate("/app");
        }}/>
        <semantic_ui_react_1.Menu.Item name={"My Guides"} link={true} onClick={async () => {
            await gatsby_1.navigate("/app/guides");
        }}/>
        <semantic_ui_react_1.Menu.Menu position='right'>
          <semantic_ui_react_1.Menu.Item name={user?.username} link={true} icon='user' onClick={async () => {
            await gatsby_1.navigate("/app/account");
        }}/>
          <semantic_ui_react_1.Menu.Item name={"Log out"} link={true} onClick={async () => {
            this.props.authStore.logOut();
            await gatsby_1.navigate("/");
        }}/>
        </semantic_ui_react_1.Menu.Menu>
      </semantic_ui_react_1.Menu>);
    }
};
AppMenu = __decorate([
    mobx_react_1.inject("authStore"),
    mobx_react_1.observer
], AppMenu);
exports.default = AppMenu;
//# sourceMappingURL=Menu.jsx.map
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
const router_1 = require("@reach/router");
const semantic_ui_react_1 = require("semantic-ui-react");
const Account_1 = __importDefault(require("components/app/Account"));
const Dashboard_1 = __importDefault(require("components/app/Dashboard"));
const Guides_1 = __importDefault(require("components/app/Guides"));
const Guide_1 = __importDefault(require("components/app/Guide"));
const Menu_1 = __importDefault(require("components/app/Menu"));
const mobx_react_1 = require("mobx-react");
const gatsby_1 = require("gatsby");
let AppComponent = class AppComponent extends React.Component {
    componentDidMount() {
        const { isLoggedIn } = this.props.authStore;
        if (!isLoggedIn) {
            gatsby_1.navigate?.("/")?.then();
        }
    }
    render() {
        const { user } = this.props.authStore;
        return (<div style={{ margin: 20 }}>
        <semantic_ui_react_1.Container>
          <Menu_1.default />
          {user &&
            <router_1.Router>
            <Account_1.default path="/app/account"/>
            <Guide_1.default path="/app/guides/:slug"/>
            <Guides_1.default path="/app/guides"/>
            <Dashboard_1.default path="/app"/>
          </router_1.Router>}
        </semantic_ui_react_1.Container>
      </div>);
    }
};
AppComponent = __decorate([
    mobx_react_1.inject("authStore"),
    mobx_react_1.observer
], AppComponent);
exports.default = AppComponent;
//# sourceMappingURL=app.jsx.map
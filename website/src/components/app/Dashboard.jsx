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
const Container_1 = __importDefault(require("components/app/Container"));
const semantic_ui_react_1 = require("semantic-ui-react");
const mobx_react_1 = require("mobx-react");
let DashboardComponent = class DashboardComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return <Container_1.default>
      <semantic_ui_react_1.Header>My Dashboard</semantic_ui_react_1.Header>
      <p>User:{this.props.authStore.user?.username}</p>
    </Container_1.default>;
    }
};
DashboardComponent = __decorate([
    mobx_react_1.inject("authStore"),
    mobx_react_1.observer
], DashboardComponent);
exports.default = DashboardComponent;
//# sourceMappingURL=Dashboard.jsx.map
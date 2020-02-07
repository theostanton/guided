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
const GuideDetailsModal_1 = __importDefault(require("components/app/GuideDetailsModal"));
const Container_1 = __importDefault(require("components/app/Container"));
const GuidesList_1 = __importDefault(require("./GuidesList"));
const mobx_react_1 = require("mobx-react");
let GuidesComponent = class GuidesComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            inc: 0,
            showCreateModal: false,
        };
    }
    render() {
        return <Container_1.default>
      <semantic_ui_react_1.Button content='Create new' onClick={() => {
            this.setState({ showCreateModal: true });
        }}/>

      {this.state.showCreateModal &&
            <GuideDetailsModal_1.default owner={this.props.authStore.owner} onClose={() => {
                this.setState({ showCreateModal: false, inc: this.state.inc + 1 });
            }}/>}

      {!this.state.showCreateModal && <GuidesList_1.default owner={this.props.authStore.owner} inc={this.state.inc}/>}
    </Container_1.default>;
    }
};
GuidesComponent = __decorate([
    mobx_react_1.inject("authStore", "guideStore"),
    mobx_react_1.observer
], GuidesComponent);
exports.default = GuidesComponent;
//# sourceMappingURL=index.jsx.map
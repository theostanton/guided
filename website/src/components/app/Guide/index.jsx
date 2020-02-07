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
const mobx_react_1 = require("mobx-react");
const Map_1 = __importDefault(require("components/Map"));
const semantic_ui_react_1 = require("semantic-ui-react");
const Menu_1 = __importDefault(require("components/app/Menu"));
const LeftRail_1 = __importDefault(require("./LeftRail"));
let GuideComponent = class GuideComponent extends React.Component {
    componentDidMount() {
        this.props.guideStore.subscribe(this.props.slug, this.props.authStore.owner);
    }
    componentWillUnmount() {
        this.props.guideStore.unsubscribe();
    }
    render() {
        const guide = this.props.guideStore.guide;
        return (<div>
        <div style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
        }}>
          <Map_1.default>
            <semantic_ui_react_1.Rail position='left'>LEFT</semantic_ui_react_1.Rail>
          </Map_1.default>
        </div>

        <div style={{
            position: "fixed",
            marginLeft: "2em",
            marginRight: "2em",
            top: "1em",
            left: "25%",
            right: "25%",
            zIndex: 3
        }}>
          <Menu_1.default />
        </div>

        {guide && <div style={{
            position: "fixed",
            height: "100%",
            width: "25%",
            paddingTop: "1em",
            paddingLeft: "1em",
            paddingBottom: "2em",
            margin: 0,
            top: 0,
            left: 0,
            bottom: 0,
            zIndex: 3
        }}>

          <LeftRail_1.default guide={guide}/>

        </div>}
      </div>);
    }
};
GuideComponent = __decorate([
    mobx_react_1.inject("authStore", "guideStore"),
    mobx_react_1.observer
], GuideComponent);
exports.default = GuideComponent;
//# sourceMappingURL=index.jsx.map
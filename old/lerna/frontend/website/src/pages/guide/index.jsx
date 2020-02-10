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
const react_components_1 = require("@apollo/react-components");
const Store_1 = require("../../stores/Store");
const LeftRail_1 = __importDefault(require("./LeftRail"));
const queries_1 = require("./queries");
const RightRail_1 = __importDefault(require("./RightRail"));
const Layout_1 = __importDefault(require("../../components/Layout"));
const Map_1 = __importDefault(require("../../components/Map"));
const mobx_react_1 = require("mobx-react");
function extractSlug(pathName) {
    return pathName.split('/')[2];
}
let GuideComponent = class GuideComponent extends React.Component {
    get slug() {
        return this.props.location.pathname.split('/')[2];
    }
    getLeftRailSegment(response) {
        if (response.error) {
            return <semantic_ui_react_1.Segment>{response.error.message}</semantic_ui_react_1.Segment>;
        }
        if (response.loading) {
            return <semantic_ui_react_1.Segment loading/>;
        }
        return <semantic_ui_react_1.Segment style={{ height: '100%', 'overflowY': 'scroll' }}>
            <LeftRail_1.default store={this.props.store}/>
        </semantic_ui_react_1.Segment>;
    }
    render() {
        const store = this.props.store;
        const slug = this.slug;
        return <react_components_1.Query query={queries_1.QUERY} variables={{ slug }} pollInterval={2000}>

            {(response) => {
            if (response.data) {
                store.update({ ...response.data, refetch: response.refetch });
            }
            return (<div>
                        <semantic_ui_react_1.Segment style={{ height: '100vh', width: '100%', padding: 0, margin: 0 }}>
                            <Map_1.default store={store}/>
                            <semantic_ui_react_1.Rail internal attached position={'left'} style={{ height: '100%', padding: '2em' }}>
                                {this.getLeftRailSegment(response)}
                            </semantic_ui_react_1.Rail>
                            <semantic_ui_react_1.Rail internal position={'right'} style={{ height: '100%', padding: '2em' }}>
                                <RightRail_1.default store={store}/>
                            </semantic_ui_react_1.Rail>
                        </semantic_ui_react_1.Segment>
                    </div>);
        }}
        </react_components_1.Query>;
    }
};
GuideComponent = __decorate([
    mobx_react_1.observer
], GuideComponent);
function default_1(props) {
    return (<Layout_1.default location={props.location}>
        <GuideComponent store={new Store_1.Store()} {...props}/>
    </Layout_1.default>);
}
exports.default = default_1;
;

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
const Map_1 = __importDefault(require("../components/Map"));
const Layout_1 = __importDefault(require("../components/Layout"));
const queries_1 = require("./index/queries");
const semantic_ui_react_1 = require("semantic-ui-react");
const react_components_1 = require("@apollo/react-components");
const Store_1 = require("../stores/Store");
const mobx_react_1 = require("mobx-react");
const LeftRail_1 = __importDefault(require("./index/LeftRail"));
const RightRail_1 = __importDefault(require("./index/RightRail"));
let IndexComponent = class IndexComponent extends React.Component {
    render() {
        const store = this.props.store;
        return React.createElement(react_components_1.Query, { query: queries_1.QUERY, pollInterval: 2000 }, ({ loading, error, data, refetch }) => {
            console.log('store!', store);
            if (data) {
                console.log('data', Object.keys(data));
                store.update({ ...data, refetch });
            }
            return (React.createElement("div", null,
                React.createElement(semantic_ui_react_1.Segment, { style: { height: '100vh', width: '100%', padding: 0, margin: 0 } },
                    React.createElement(Map_1.default, { store: store }),
                    React.createElement(semantic_ui_react_1.Rail, { internal: true, attached: true, position: 'left', style: { height: '100%', padding: '2em' } },
                        React.createElement(semantic_ui_react_1.Segment, { style: { height: '100%', 'overflowY': 'scroll' } },
                            React.createElement(LeftRail_1.default, { store: store }))),
                    React.createElement(semantic_ui_react_1.Rail, { internal: true, position: 'right', style: { height: '100%', padding: '2em' } },
                        React.createElement(RightRail_1.default, { store: store })))));
        });
    }
};
IndexComponent = __decorate([
    mobx_react_1.observer
], IndexComponent);
function default_1(props) {
    return (React.createElement(Layout_1.default, { location: props.location },
        React.createElement(IndexComponent, Object.assign({ store: new Store_1.Store() }, props))));
}
exports.default = default_1;
;
//# sourceMappingURL=index.js.map
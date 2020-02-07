"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const mobx_react_1 = require("mobx-react");
const Grid_1 = __importDefault(require("semantic-ui-react/dist/commonjs/collections/Grid"));
const GridColumn_1 = __importDefault(require("semantic-ui-react/dist/commonjs/collections/Grid/GridColumn"));
const semantic_ui_react_1 = require("semantic-ui-react");
const LeftDetailPane_1 = __importDefault(require("./LeftDetailPane"));
const GuideList_1 = __importDefault(require("../../../components/GuideList"));
let LeftRail = class LeftRail extends react_1.default.Component {
    render() {
        return <Grid_1.default>
            <GridColumn_1.default>
                {this.props.store.hasData() ? <GuideList_1.default store={this.props.store}/> : <semantic_ui_react_1.Segment loading/>}
            </GridColumn_1.default>
            {this.props.store.leftDetailPane && <GridColumn_1.default><LeftDetailPane_1.default store={this.props.store}/></GridColumn_1.default>}
        </Grid_1.default>;
    }
};
LeftRail = __decorate([
    mobx_react_1.observer
], LeftRail);
exports.default = LeftRail;
//# sourceMappingURL=index.jsx.map
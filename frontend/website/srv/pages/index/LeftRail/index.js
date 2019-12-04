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
const RideList_1 = __importDefault(require("../RideList"));
let LeftRail = class LeftRail extends react_1.default.Component {
    render() {
        if (this.props.store.hasData()) {
            return react_1.default.createElement(RideList_1.default, { store: this.props.store });
        }
        return react_1.default.createElement("div", null);
    }
};
LeftRail = __decorate([
    mobx_react_1.observer
], LeftRail);
exports.default = LeftRail;
//# sourceMappingURL=index.js.map
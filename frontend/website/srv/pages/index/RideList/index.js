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
const semantic_ui_react_1 = require("semantic-ui-react");
const RideItem_1 = __importDefault(require("./RideItem"));
const mobx_react_1 = require("mobx-react");
let RideList = class RideList extends react_1.default.Component {
    render() {
        if (this.props.store.hasData()) {
            const rides = this.props.store.rides;
            return react_1.default.createElement(semantic_ui_react_1.Card.Group, { style: { 'height': '100%', 'overflowY': 'scroll', 'backgroundColour': '#00ff00' } }, rides.map(ride => {
                return ([react_1.default.createElement(semantic_ui_react_1.Card, { fluid: true, onMouseEnter: () => {
                            console.log('onEnter');
                        }, attached: true, key: ride.id },
                        react_1.default.createElement(RideItem_1.default, { ride: ride, selectRide: (ride) => {
                                this.props.store.selectedRide = ride;
                            } })), react_1.default.createElement(semantic_ui_react_1.Card, { fluid: true, onMouseEnter: () => {
                            console.log('onEnter');
                        }, attached: true, key: `${ride.id}-1` },
                        react_1.default.createElement(RideItem_1.default, { ride: ride, selectRide: (ride) => {
                                this.props.store.selectedRide = ride;
                            } }))]);
            }));
        }
        else {
            return react_1.default.createElement(semantic_ui_react_1.Segment, { style: { height: '100%' }, loading: true });
        }
    }
};
RideList = __decorate([
    mobx_react_1.observer
], RideList);
exports.default = RideList;
//# sourceMappingURL=index.js.map
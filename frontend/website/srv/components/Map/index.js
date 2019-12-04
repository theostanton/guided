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
const react_map_gl_1 = __importStar(require("react-map-gl"));
const react_1 = __importStar(require("react"));
const Markers_1 = require("./Markers");
const Rides_1 = __importDefault(require("./Rides"));
const mobx_react_1 = require("mobx-react");
const viewport_mercator_project_1 = __importDefault(require("viewport-mercator-project"));
let Map = class Map extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            viewport: {
                width: 400,
                height: 400,
                latitude: 51.5007,
                longitude: -0.1246,
                zoom: 8,
            }
        };
    }
    render() {
        let viewport;
        if (this.props.store.selectedRide) {
            const startLat = this.props.store.selectedRide.start.location.lat;
            const startLong = this.props.store.selectedRide.start.location.long;
            const endLat = this.props.store.selectedRide.end.location.lat;
            const endLong = this.props.store.selectedRide.end.location.long;
            console.log('startLat', startLat, 'startLong', startLong);
            const { longitude, latitude, zoom } = new viewport_mercator_project_1.default(this.state.viewport)
                .fitBounds([[startLong, startLat], [endLong, endLat]], {
                padding: 20,
                offset: [0, -100]
            });
            viewport = {
                ...this.state.viewport,
                longitude,
                latitude,
                zoom,
                transitionDuration: 5000,
                transitionInterpolator: new react_map_gl_1.FlyToInterpolator()
            };
        }
        else {
            viewport = this.state.viewport;
        }
        return (react_1.default.createElement(react_map_gl_1.default, Object.assign({ mapboxApiAccessToken: "pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazNscGM2djAwdHYwM29vN3l6NWdyY2QxIn0.L4-DzQEX16suphipPXgDmw" }, viewport, { 
            // onClick={async (event) => {
            //     console.log('event',event)
            //     // if (guide) {
            //     //     await addStayFromLatLong(guide.id, event.lngLat[1], event.lngLat[0], "On click");
            //     //     this.props.store.refetch()
            //     // }
            //
            // }}
            height: "100%", width: "100%" }),
            react_1.default.createElement(Markers_1.Markers, { guide: this.props.store.guide }),
            react_1.default.createElement(Rides_1.default, { rides: this.props.store.rides, selectedRide: this.props.store.selectedRide })));
    }
};
Map = __decorate([
    mobx_react_1.observer
], Map);
exports.default = Map;
//# sourceMappingURL=index.js.map
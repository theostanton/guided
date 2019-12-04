"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const polyline_1 = require("../../data/maps/polyline");
// @ts-ignore
const react_map_gl_1 = require("react-map-gl");
class Rides extends react_1.default.Component {
    render() {
        const { rides } = this.props;
        if (!rides) {
            return react_1.default.createElement("div", null);
        }
        const dataLayer = {
            paint: {
                'line-color': '#ffff00'
            }
        };
        const selectedDataLayer = {
            paint: {
                'line-color': '#ff00ff'
            }
        };
        return (react_1.default.createElement("div", null, rides && rides
            .filter(ride => {
            return ride.route;
        })
            .map(ride => {
            const geoJson = polyline_1.polylineToGeoJson(ride.route.overview_polyline.points);
            const isSelected = this.props.selectedRide?.id === ride.id;
            const layerId = `ride-layer-${ride.id}`;
            const sourceId = `ride-source-${ride.id}`;
            return ([react_1.default.createElement(react_map_gl_1.Source, { key: sourceId, type: "geojson", data: geoJson, id: sourceId }),
                react_1.default.createElement(react_map_gl_1.Layer, Object.assign({ key: layerId }, dataLayer, { type: 'line', source: sourceId })),
                isSelected === true &&
                    react_1.default.createElement(react_map_gl_1.Layer, Object.assign({ key: `${layerId}-selected` }, selectedDataLayer, { source: sourceId, type: 'line' }))]);
        })));
    }
}
exports.default = Rides;
//# sourceMappingURL=Rides.js.map
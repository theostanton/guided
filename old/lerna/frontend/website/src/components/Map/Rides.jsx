"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const polyline_1 = require("../../data/maps/polyline");
const react_map_gl_1 = require("react-map-gl");
class Rides extends react_1.default.Component {
    render() {
        const { rides } = this.props;
        if (!rides) {
            return <div />;
        }
        const dataLayer = {
            paint: {
                'line-width': 1,
                'line-color': this.props.selectedRide ? '#999999' : '#444444'
            }
        };
        const selectedDataLayer = {
            paint: {
                'line-width': 1,
                'line-color': '#000000'
            }
        };
        const highlightedDataLayer = {
            paint: {
                'line-width': 1,
                'line-color': '#ff0000'
            }
        };
        return (<div>
                {rides && rides
            .map((ride) => {
            const geoJson = polyline_1.pathToGeoJson(ride.path);
            const isSelected = this.props.selectedRide?.id === ride.id;
            const isHighlighted = this.props.highLightedRide?.id === ride.id;
            const layerId = `ride-layer-${ride.id}`;
            const sourceId = `ride-source-${ride.id}`;
            return ([
                <react_map_gl_1.Source key={sourceId} type="geojson" data={geoJson} id={sourceId}/>,
                !isSelected && !isHighlighted &&
                    <react_map_gl_1.Layer key={layerId} {...dataLayer} type={'line'} source={sourceId}/>,
                isSelected === true &&
                    <react_map_gl_1.Layer key={`${layerId}-selected`} {...selectedDataLayer} source={sourceId} type={'line'}/>,
                !this.props.selectedRide && isHighlighted === true &&
                    <react_map_gl_1.Layer key={`${layerId}-highlighted`} {...highlightedDataLayer} source={sourceId} type={'line'}/>
            ]);
        })}
            </div>);
    }
}
exports.default = Rides;

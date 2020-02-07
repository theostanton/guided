"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { toGeoJSON } = require('@mapbox/polyline');
function polylineToGeoJson(polyline) {
    const geometry = toGeoJSON(polyline);
    return {
        type: 'FeatureCollection',
        features: [
            {
                geometry,
                type: 'Feature'
            }
        ]
    };
}
exports.polylineToGeoJson = polylineToGeoJson;
function pathToGeoJson(path) {
    return {
        type: 'FeatureCollection',
        features: [
            {
                geometry: {
                    "type": "LineString",
                    "coordinates": path.map(latLng => {
                        return [latLng.long, latLng.lat];
                    })
                },
                type: 'Feature'
            }
        ]
    };
}
exports.pathToGeoJson = pathToGeoJson;
//# sourceMappingURL=polyline.js.map
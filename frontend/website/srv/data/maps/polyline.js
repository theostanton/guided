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
//# sourceMappingURL=polyline.js.map
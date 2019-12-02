const {toGeoJSON} = require('@mapbox/polyline');

export function polylineToGeoJson(polyline: string): any {

    const geometry = toGeoJSON(polyline);
    return {
        type: 'FeatureCollection',
        features: [
            {
                geometry,
                type: 'Feature'
            }
        ]
    }


}
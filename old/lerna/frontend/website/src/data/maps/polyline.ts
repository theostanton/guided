import {LatLng} from "../../../../../backend/common/src";

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

export function pathToGeoJson(path: LatLng[]): any {

    return {
        type: 'FeatureCollection',
        features: [
            {
                geometry: {
                    "type": "LineString",
                    "coordinates": path.map(latLng => {
                        return [latLng.long, latLng.lat]
                    })
                },
                type: 'Feature'
            }
        ]
    }
}
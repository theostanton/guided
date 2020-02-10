"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const maps_1 = __importDefault(require("@google/maps"));
exports.client = maps_1.default.createClient({
    key: 'AIzaSyDQFYYLKKcqmY0RWlysZOQlWPgGZEAM3po',
    Promise: Promise
});
async function directions(startLat, startLong, endLat, endLong, waypoints) {
    const { json: data } = await exports.client.directions({
        waypoints: waypoints.map((waypoint) => {
            return {
                lng: waypoint.long,
                lat: waypoint.lat
            };
        }),
        origin: {
            lat: startLat,
            lng: startLong
        },
        destination: {
            lat: endLat,
            lng: endLong
        }
    }).asPromise();
    return data;
}
exports.directions = directions;
async function reverseGeocode(lat, lng) {
    const { json: data } = await exports.client.reverseGeocode({
        latlng: {
            lat,
            lng
        }
    }).asPromise();
    return data;
}
exports.reverseGeocode = reverseGeocode;

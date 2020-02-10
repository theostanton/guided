"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = __importDefault(require("../../../utils/memoize"));
const LocationDao_1 = __importDefault(require("../../../database/daos/LocationDao"));
const dao = memoize_1.default(() => {
    return new LocationDao_1.default();
});
function location(_, { id }) {
    return dao().get(id);
}
exports.location = location;
function allLocations(_, args) {
    return dao().getAll();
}
exports.allLocations = allLocations;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __importDefault(require("../../../utils/memoize"));
var LocationDao_1 = __importDefault(require("../../../database/daos/LocationDao"));
var dao = memoize_1.default(function () {
    return new LocationDao_1.default();
});
function location(_, _a) {
    var id = _a.id;
    return dao().get(id);
}
exports.location = location;
function allLocations(_, args) {
    return dao().getAll();
}
exports.allLocations = allLocations;

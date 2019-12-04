"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __importDefault(require("../../../utils/memoize"));
var RideDao_1 = __importDefault(require("../../../database/daos/RideDao"));
var dao = memoize_1.default(function () {
    return new RideDao_1.default();
});
function ride(_, _a) {
    var id = _a.id;
    return dao().get(id);
}
exports.ride = ride;
function allRides(_, args) {
    return dao().getAll();
}
exports.allRides = allRides;

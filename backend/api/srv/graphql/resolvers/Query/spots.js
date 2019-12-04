"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __importDefault(require("../../../utils/memoize"));
var SpotDao_1 = __importDefault(require("../../../database/daos/SpotDao"));
var dao = memoize_1.default(function () {
    return new SpotDao_1.default();
});
function spot(_, _a) {
    var id = _a.id;
    return dao().get(id);
}
exports.spot = spot;
function allSpots(_, args) {
    return dao().getAll();
}
exports.allSpots = allSpots;

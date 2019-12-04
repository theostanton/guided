"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __importDefault(require("../../../utils/memoize"));
var StayDao_1 = __importDefault(require("../../../database/daos/StayDao"));
var dao = memoize_1.default(function () {
    return new StayDao_1.default();
});
function stay(_, _a) {
    var id = _a.id;
    return dao().get(id);
}
exports.stay = stay;
function allStays(_, args) {
    return dao().getAll();
}
exports.allStays = allStays;

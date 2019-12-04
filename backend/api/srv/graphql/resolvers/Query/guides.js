"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __importDefault(require("../../../utils/memoize"));
var GuideDao_1 = __importDefault(require("../../../database/daos/GuideDao"));
var dao = memoize_1.default(function () {
    return new GuideDao_1.default();
});
function guide(_, _a) {
    var id = _a.id;
    return dao().get(id);
}
exports.guide = guide;
function allGuides(_, args) {
    return dao().getAll();
}
exports.allGuides = allGuides;

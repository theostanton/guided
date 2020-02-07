"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = __importDefault(require("../../../utils/memoize"));
const GuideDao_1 = __importDefault(require("../../../database/daos/GuideDao"));
const dao = memoize_1.default(() => {
    return new GuideDao_1.default();
});
async function guide(_, { slug }) {
    return dao().getFromSlug(slug);
}
exports.guide = guide;
function allGuides(_, args) {
    return dao().getAll();
}
exports.allGuides = allGuides;
//# sourceMappingURL=guides.js.map
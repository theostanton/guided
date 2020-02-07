"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = __importDefault(require("../../../utils/memoize"));
const StayDao_1 = __importDefault(require("../../../database/daos/StayDao"));
const dao = memoize_1.default(() => {
    return new StayDao_1.default();
});
function stay(_, { id }) {
    return dao().get(id);
}
exports.stay = stay;
function allStays(_, args) {
    return dao().getAll();
}
exports.allStays = allStays;
//# sourceMappingURL=stays.js.map
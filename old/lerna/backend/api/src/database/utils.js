"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slugify_1 = __importDefault(require("slugify"));
function generateId(prefix) {
    const id = Math.random().toString().substring(3, 10);
    if (prefix) {
        return `${prefix}_${id}`;
    }
    else {
        return id;
    }
}
exports.generateId = generateId;
function generateSlug(from) {
    return slugify_1.default(from, {
        lower: true
    });
}
exports.generateSlug = generateSlug;
//# sourceMappingURL=utils.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cuid_1 = __importDefault(require("cuid"));
const client_1 = __importDefault(require("./client"));
exports.client = client_1.default;
function generateId(prefix) {
    return `${prefix}_${cuid_1.default.slug()}`;
}
exports.generateId = generateId;
//# sourceMappingURL=index.js.map
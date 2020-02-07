"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequence_1 = __importDefault(require("./sequence"));
async function execute() {
    await sequence_1.default();
}
exports.default = execute;
//# sourceMappingURL=execute.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daos_1 = __importDefault(require("../../database/daos"));
async function location(stay) {
    return (await daos_1.default.location.get(stay.location));
}
exports.default = {
    location
};

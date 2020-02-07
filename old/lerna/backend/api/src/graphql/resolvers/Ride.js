"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daos_1 = __importDefault(require("../../database/daos"));
async function start(ride) {
    return await daos_1.default.stay.get(ride.start);
}
async function end(ride) {
    return await daos_1.default.stay.get(ride.end);
}
exports.default = {
    start,
    end
};
//# sourceMappingURL=Ride.js.map
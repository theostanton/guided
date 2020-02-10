"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daos_1 = __importDefault(require("../../database/daos"));
async function default_1(_, { id, label, locked, nights }) {
    const stay = await daos_1.default.stay.get(id);
    await daos_1.default.stay.update({
        id,
        locked,
        nights
    });
    await daos_1.default.location.update({
        id: stay.location,
        label
    });
    return {
        id
    };
}
exports.default = default_1;

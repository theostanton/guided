"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daos_1 = __importDefault(require("../../database/daos"));
const calculateride_1 = require("../../events/calculateride");
async function default_1(_, { guideId }) {
    await daos_1.default.ride.deleteWhere({ guide: guideId });
    await daos_1.default.stay.deleteWhere({ guide: guideId });
    await calculateride_1.updateAll(guideId);
    return {
        id: guideId
    };
}
exports.default = default_1;

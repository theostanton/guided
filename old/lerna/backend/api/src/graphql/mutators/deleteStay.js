"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daos_1 = __importDefault(require("../../database/daos"));
const calculateride_1 = require("../../events/calculateride");
async function default_1(_, { stayId }) {
    const { guide: guideId } = await daos_1.default.stay.get(stayId);
    await daos_1.default.ride.deleteWhere({ end: stayId });
    await daos_1.default.ride.deleteWhere({ start: stayId });
    await daos_1.default.stay.deleteWhere({
        id: stayId
    });
    await calculateride_1.updateAll(guideId);
    return {
        id: stayId
    };
}
exports.default = default_1;
//# sourceMappingURL=deleteStay.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daos_1 = __importDefault(require("../../database/daos"));
const utils_1 = require("../../database/utils");
const database_1 = __importDefault(require("../../database"));
const location_1 = require("../../database/models/location");
const calculateride_1 = require("../../events/calculateride");
async function default_1(_, { guideId, locked, label, lat, long, nights }) {
    console.log('addStayFromLagLng()');
    const locationRow = await location_1.generateLocationRow(lat, long, label);
    const { id: locationId } = await daos_1.default.location.insert(locationRow);
    let query = `SELECT max(position) as max from stays where guide='${guideId}' and locked=true`;
    const { max: currentPosition } = await database_1.default().one(query);
    const { id: stayId } = await daos_1.default.stay.insert({
        id: utils_1.generateId('stay'),
        nights,
        locked,
        position: currentPosition === undefined ? 0 : currentPosition + 100,
        location: locationId,
        guide: guideId
    });
    await calculateride_1.updateAll(guideId);
    return {
        id: stayId
    };
}
exports.default = default_1;
//# sourceMappingURL=addStayFromLagLng.js.map
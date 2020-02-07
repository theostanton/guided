"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
const location_1 = require("../../database/models/location");
const calculateride_1 = require("../../events/calculateride");
async function default_1(_, { locationId, lat, long }) {
    console.log('moveStay');
    const { guide: guideId, id: stayId } = await database_1.daos.stay.findOne({ 'location': locationId });
    const { label } = await database_1.daos.location.get(locationId);
    const locationRow = await location_1.generateLocationRow(lat, long, label);
    await database_1.daos.location.update({
        ...locationRow,
        id: locationId,
        long,
        lat
    });
    await database_1.daos.stay.update({
        id: stayId,
        locked: true
    });
    await calculateride_1.updateAll(guideId);
    return {
        id: locationId
    };
}
exports.default = default_1;
//# sourceMappingURL=moveStay.js.map
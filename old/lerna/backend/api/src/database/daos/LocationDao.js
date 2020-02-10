"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_1 = require("../DAO");
class LocationDao extends DAO_1.DAO {
    constructor() {
        super(...arguments);
        this.table = 'locations';
    }
}
exports.default = LocationDao;

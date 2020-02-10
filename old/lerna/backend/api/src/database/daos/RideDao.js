"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_1 = require("../DAO");
class RideDao extends DAO_1.DAO {
    constructor() {
        super(...arguments);
        this.table = 'rides';
    }
}
exports.default = RideDao;

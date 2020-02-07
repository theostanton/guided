"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_1 = require("../DAO");
const index_1 = __importDefault(require("../index"));
class StayDao extends DAO_1.DAO {
    constructor() {
        super(...arguments);
        this.table = 'stays';
    }
    async ids() {
        return index_1.default().many(`SELECT id
                                          from stays`);
    }
}
exports.default = StayDao;
//# sourceMappingURL=StayDao.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_1 = require("../DAO");
class UserDao extends DAO_1.DAO {
    constructor() {
        super(...arguments);
        this.table = 'users';
    }
}
exports.default = UserDao;
//# sourceMappingURL=UserDao.js.map
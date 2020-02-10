"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database/"));
const UserDao_1 = __importDefault(require("../../database/daos/UserDao"));
async function stays(guide) {
    const query = `SELECT * from stays where guide='${guide.id}' order by position asc`;
    const stays = await database_1.default().manyOrNone(query);
    let offset = 0;
    return stays.map(stay => {
        const arrivalDate = new Date(new Date().getTime() + 60 * 60 * 24 * 1000 * offset);
        offset += stay.nights;
        return {
            ...stay,
            arrivalDate
        };
    });
}
async function user(guide) {
    return new UserDao_1.default().get(guide.user);
}
exports.default = {
    stays,
    user
};

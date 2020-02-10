"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = __importDefault(require("../utils/memoize"));
const daos_1 = __importDefault(require("./daos"));
exports.daos = daos_1.default;
const common_1 = require("@guided/common");
const pgp = require('pg-promise')({
    schema: 'public'
});
const logger = new common_1.Logger('Database');
function insert(data, table, columns) {
    let query = pgp.helpers.insert(data, columns, table);
    query += ' RETURNING ID';
    return exports.db().one(query);
}
exports.insert = insert;
async function insertMany(data, table, columns) {
    let query = pgp.helpers.insert(data, columns, table);
    logger.info(`insertMany: ${query}`);
    await exports.db().none(query);
}
exports.insertMany = insertMany;
async function update(data, table) {
    const columns = Object.keys(data).map(key => {
        if (key === 'id') {
            return '?id';
        }
        else {
            return key;
        }
    });
    const query = pgp.helpers.update(data, columns, table) + ` where id='${data.id}'`;
    logger.info(query);
    await exports.db().none(query);
}
exports.update = update;
exports.db = memoize_1.default(() => {
    return pgp({
        host: '127.0.0.1',
        user: 'user',
        password: 'password',
        port: 5432,
        database: 'database'
    });
});
exports.default = exports.db;

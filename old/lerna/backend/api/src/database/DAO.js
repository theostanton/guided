"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importStar(require("./index"));
const common_1 = require("@guided/common");
class DAO {
    constructor() {
        this.logger = new common_1.Logger(`DAO`);
    }
    async get(id) {
        return index_1.default().one(`
            SELECT *
            FROM ${this.table}
            where id = $1
        `, [id]);
    }
    async getOptional(id) {
        return index_1.default().oneOrNone(`
            SELECT *
            FROM ${this.table}
            where id = $1
        `, [id]);
    }
    async findOne(keyValues) {
        const where = Object.keys(keyValues).map(key => {
            return `"${key}"='${keyValues[key]}'`;
        }).join(' and ');
        let query = `
            SELECT *
            FROM ${this.table}
            where ${where}
        `;
        return index_1.default().one(query);
    }
    async findMany(keyValues) {
        const where = Object.keys(keyValues).map(key => {
            return `"${key}"='${keyValues[key]}'`;
        }).join(' and ');
        let query = `
            SELECT *
            FROM ${this.table}
            where ${where}
        `;
        return index_1.default().manyOrNone(query);
    }
    async deleteWhere(keyValues) {
        const where = Object.keys(keyValues).map(key => {
            const value = keyValues[key];
            if (typeof value === 'boolean') {
                return `"${key}"=${keyValues[key]}`;
            }
            else {
                return `"${key}"='${keyValues[key]}'`;
            }
        }).join(' and ');
        let query = `
            DELETE FROM ${this.table}
            where ${where}
        `;
        this.logger.info(`deleteWhere: ${query}`);
        return index_1.default().none(query);
    }
    async getAll() {
        return index_1.default().manyOrNone(`
            SELECT *
            FROM ${this.table}
        `);
    }
    async insert(t) {
        return index_1.insert(t, this.table);
    }
    async insertMany(ts) {
        if (ts.length === 0) {
            return;
        }
        const columns = Object.keys(ts[0]);
        return index_1.insertMany(ts, this.table, columns);
    }
    async update(t) {
        return index_1.update(t, this.table);
    }
}
exports.DAO = DAO;
//# sourceMappingURL=DAO.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_1 = require("../DAO");
const index_1 = __importDefault(require("../index"));
class GuideDao extends DAO_1.DAO {
    constructor() {
        super(...arguments);
        this.table = 'guides';
    }
    getFromSlug(slug) {
        let query = `
            SELECT *
            FROM ${this.table}
            where slug = $1
        `;
        return index_1.default().one(query, [slug]);
    }
}
exports.default = GuideDao;

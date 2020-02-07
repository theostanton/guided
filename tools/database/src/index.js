"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@guided/envs");
const pg_promise_1 = __importDefault(require("pg-promise"));
exports.DATABASE_URL = `postgres://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;
const options = {
    schema: process.env.DATABASE_SCHEMA,
    extend(db) {
        db.findUser = userId => {
            return db.one("SELECT * FROM Users WHERE id = $1", userId);
        };
    },
};
const pgp = pg_promise_1.default(options);
exports.database = pgp(exports.DATABASE_URL);
//# sourceMappingURL=index.js.map
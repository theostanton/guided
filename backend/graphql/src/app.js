"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@guided/envs");
console.log(`OWNER_USER=${process.env.OWNER_USER}`);
console.log(`POSTGRES_HOST=${process.env.POSTGRES_HOST}`);
const postgraphilerc_1 = require("./postgraphilerc");
const express_1 = __importDefault(require("express"));
const postgraphile_1 = require("postgraphile");
const app = express_1.default();
app.use(postgraphile_1.postgraphile(postgraphilerc_1.connection, process.env.DATABASE_SCHEMA, postgraphilerc_1.options));
exports.default = app;
//# sourceMappingURL=app.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daos_1 = __importDefault(require("../../database/daos"));
const utils_1 = require("../../database/utils");
async function default_1(_, { email, username }) {
    return daos_1.default.user.insert({
        id: utils_1.generateId('user'),
        email,
        username
    });
}
exports.default = default_1;
//# sourceMappingURL=createUser.js.map
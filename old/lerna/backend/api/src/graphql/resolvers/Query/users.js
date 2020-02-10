"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = __importDefault(require("../../../utils/memoize"));
const UserDao_1 = __importDefault(require("../../../database/daos/UserDao"));
const dao = memoize_1.default(() => {
    return new UserDao_1.default();
});
function user(_, { id }) {
    return dao().get(id);
}
exports.user = user;
function allUsers(_, args) {
    return dao().getAll();
}
exports.allUsers = allUsers;

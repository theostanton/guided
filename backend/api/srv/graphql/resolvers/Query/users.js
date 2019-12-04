"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __importDefault(require("../../../utils/memoize"));
var UserDao_1 = __importDefault(require("../../../database/daos/UserDao"));
var dao = memoize_1.default(function () {
    return new UserDao_1.default();
});
function user(_, _a) {
    var id = _a.id;
    return dao().get(id);
}
exports.user = user;
function allUsers(_, args) {
    return dao().getAll();
}
exports.allUsers = allUsers;

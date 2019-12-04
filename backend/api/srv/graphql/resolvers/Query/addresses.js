"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __importDefault(require("../../../utils/memoize"));
var AddressDao_1 = __importDefault(require("../../../database/daos/AddressDao"));
var dao = memoize_1.default(function () {
    return new AddressDao_1.default();
});
function address(_, _a) {
    var id = _a.id;
    return dao().get(id);
}
exports.address = address;
function allAddresses(_, args) {
    return dao().getAll();
}
exports.allAddresses = allAddresses;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var addStayFromAddress_1 = __importDefault(require("./addStayFromAddress"));
var addStayFromLagLng_1 = __importDefault(require("./addStayFromLagLng"));
var createUser_1 = __importDefault(require("./createUser"));
var createGuide_1 = __importDefault(require("./createGuide"));
var deleteAllStays_1 = __importDefault(require("./deleteAllStays"));
var moveStay_1 = __importDefault(require("./moveStay"));
var deleteStay_1 = __importDefault(require("./deleteStay"));
var updateStay_1 = __importDefault(require("./updateStay"));
var mutators = {
    addStayFromAddress: addStayFromAddress_1.default, addStayFromLagLng: addStayFromLagLng_1.default, moveStay: moveStay_1.default, createUser: createUser_1.default, createGuide: createGuide_1.default, deleteStay: deleteStay_1.default, deleteAllStays: deleteAllStays_1.default, updateStay: updateStay_1.default
};
exports.default = mutators;

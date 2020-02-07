"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addStayFromAddress_1 = __importDefault(require("./addStayFromAddress"));
const addStayFromLagLng_1 = __importDefault(require("./addStayFromLagLng"));
const createUser_1 = __importDefault(require("./createUser"));
const createGuide_1 = __importDefault(require("./createGuide"));
const deleteAllStays_1 = __importDefault(require("./deleteAllStays"));
const moveStay_1 = __importDefault(require("./moveStay"));
const deleteStay_1 = __importDefault(require("./deleteStay"));
const updateStay_1 = __importDefault(require("./updateStay"));
const mutators = {
    addStayFromAddress: addStayFromAddress_1.default, addStayFromLagLng: addStayFromLagLng_1.default, moveStay: moveStay_1.default, createUser: createUser_1.default, createGuide: createGuide_1.default, deleteStay: deleteStay_1.default, deleteAllStays: deleteAllStays_1.default, updateStay: updateStay_1.default
};
exports.default = mutators;
//# sourceMappingURL=index.js.map
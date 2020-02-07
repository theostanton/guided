"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_boost_1 = __importDefault(require("apollo-boost"));
const addStayFromLatLng_1 = __importDefault(require("./addStayFromLatLng"));
exports.addStayFromLatLong = addStayFromLatLng_1.default;
const addStayFromAddress_1 = __importDefault(require("./addStayFromAddress"));
exports.addStayFromAddress = addStayFromAddress_1.default;
const moveStay_1 = __importDefault(require("./moveStay"));
exports.moveStay = moveStay_1.default;
const deleteStay_1 = __importDefault(require("./deleteStay"));
exports.deleteStay = deleteStay_1.default;
const updateStay_1 = __importDefault(require("./updateStay"));
exports.updateStay = updateStay_1.default;
const deleteAllStays_1 = __importDefault(require("./deleteAllStays"));
exports.deleteAllStays = deleteAllStays_1.default;
exports.client = new apollo_boost_1.default({
    uri: "http://localhost:4000/graphql",
});
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var addStayFromAddress_1 = __importDefault(require("./addStayFromAddress"));
var addStayFromLagLng_1 = __importDefault(require("./addStayFromLagLng"));
var moveStay_1 = __importDefault(require("./moveStay"));
var mutators = {
    addStayFromAddress: addStayFromAddress_1.default, addStayFromLagLng: addStayFromLagLng_1.default, moveStay: moveStay_1.default
};
exports.default = mutators;

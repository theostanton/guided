"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
function logJson(object, label) {
    if (label) {
        console.log(chalk_1.default.keyword("orange")(label));
    }
    console.log(JSON.stringify(object, null, 4));
}
exports.logJson = logJson;
function log(message, label) {
    if (label) {
        console.log(chalk_1.default.keyword("orange")(label));
    }
    console.log(message);
}
exports.log = log;
function logObject(object, label) {
    if (label) {
        console.log(chalk_1.default.keyword("orange")(label));
    }
    console.log(object);
}
exports.logObject = logObject;
//# sourceMappingURL=logger.js.map
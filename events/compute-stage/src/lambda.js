"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("@guided/events");
const action_1 = __importDefault(require("./action"));
async function handler(event, context) {
    return events_1.receive(event, context, action_1.default);
}
exports.handler = handler;
//# sourceMappingURL=lambda.js.map
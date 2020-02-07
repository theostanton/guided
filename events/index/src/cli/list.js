"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqs_1 = __importDefault(require("../sqs"));
const logger_1 = require("@guided/logger");
async function default_1(options) {
    console.log("list()");
    console.log(`options=${JSON.stringify(options, null, 4)}`);
    const lists = await sqs_1.default.listQueues().promise();
    lists.QueueUrls.forEach(list => {
        logger_1.log("list", list);
    });
}
exports.default = default_1;
//# sourceMappingURL=list.js.map
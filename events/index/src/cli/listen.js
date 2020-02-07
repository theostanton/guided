"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqs_1 = __importDefault(require("../sqs"));
async function default_1(options) {
    console.log("create()");
    console.log(`options=${JSON.stringify(options, null, 4)}`);
    const result = await sqs_1.default.createQueue({
        QueueName: options.queue,
    }).promise();
    console.log(result);
}
exports.default = default_1;
//# sourceMappingURL=listen.js.map
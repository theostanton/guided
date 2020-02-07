"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqs_1 = __importDefault(require("./sqs"));
const logger_1 = require("@guided/logger");
async function send(queueName, body) {
    logger_1.log(queueName, "queueName");
    const { QueueUrl } = await sqs_1.default.getQueueUrl({
        QueueName: queueName,
    }).promise();
    logger_1.log(QueueUrl, "QueueUrl");
    const result = await sqs_1.default.sendMessage({
        QueueUrl: QueueUrl,
        MessageBody: JSON.stringify(body, null, 4),
    }).promise();
    logger_1.logJson(result, "send() result");
}
exports.send = send;
async function receive(event, _, action) {
    try {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "SQS event processed.",
                input: event,
            }),
        };
        const body = JSON.parse(event.Records[0].body);
        await action(body);
        return response;
    }
    catch (e) {
        console.error("receive() error");
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: e.message,
            }),
        };
    }
}
exports.receive = receive;
//# sourceMappingURL=index.js.map
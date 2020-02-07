"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@guided/envs");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
if (!process.env._AWS_REGION) {
    throw new Error(`No regionfor AWS.config. process.env._AWS_REGION=${process.env._AWS_REGION}`);
}
aws_sdk_1.default.config.update({ region: process.env._AWS_REGION });
exports.default = new aws_sdk_1.default.SQS({});
//# sourceMappingURL=sqs.js.map
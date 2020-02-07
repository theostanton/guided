"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awsServerlessExpress = __importStar(require("aws-serverless-express"));
const app_1 = __importDefault(require("./app"));
const server = awsServerlessExpress.createServer(app_1.default);
exports.handler = (event, context) => {
    awsServerlessExpress.proxy(server, event, context);
};
//# sourceMappingURL=lambda.js.map
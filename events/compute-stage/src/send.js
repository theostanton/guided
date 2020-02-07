"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const events = __importStar(require("@guided/events"));
async function send(body) {
    await events.send(process.env.QUEUE_NAME_COMPUTE_STAGE, body);
}
exports.default = send;
//# sourceMappingURL=send.js.map
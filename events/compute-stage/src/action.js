"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@guided/logger");
async function default_1(body) {
    logger_1.logJson(body, "handle compute-stage");
    logger_1.log(body.someField, "body.someField");
}
exports.default = default_1;
//# sourceMappingURL=action.js.map
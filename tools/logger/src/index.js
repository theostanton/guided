"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocalLogger_1 = require("./LocalLogger");
let logger;
switch (process.env.STAGE) {
    case "local":
        logger = new LocalLogger_1.LocalLogger();
        break;
    case "staging":
        logger = new LocalLogger_1.LocalLogger();
        break;
    default:
        throw new Error(`Exporting Logger with no process.env.STAGE`);
}
exports.log = logger.log, exports.logError = logger.error, exports.logInfo = logger.info, exports.logJson = logger.json;
exports.default = logger;
//# sourceMappingURL=index.js.map
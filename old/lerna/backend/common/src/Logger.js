"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Level;
(function (Level) {
    Level[Level["INFO"] = 0] = "INFO";
    Level[Level["WARNING"] = 1] = "WARNING";
    Level[Level["DEBUG"] = 2] = "DEBUG";
    Level[Level["ERROR"] = 3] = "ERROR";
})(Level = exports.Level || (exports.Level = {}));
class Logger {
    constructor(label, level = Level.DEBUG) {
        this.label = label;
        this.level = level;
    }
    static build(label, level = Level.DEBUG) {
        const logger = new Logger(label, level);
        return {
            debug: logger.debug,
            error: logger.error,
            info: logger.info,
            throwError: logger.throwError,
            warning: logger.warning
        };
    }
    buildMessage(message) {
        return `${this.label}: ${message}`;
    }
    info(message) {
        if (this.level <= Level.INFO) {
            console.info(this.buildMessage(message));
        }
    }
    debug(message) {
        if (this.level <= Level.DEBUG) {
            console.log(this.buildMessage(message));
        }
    }
    warning(message) {
        if (this.level <= Level.WARNING) {
            console.warn(this.buildMessage(message));
        }
    }
    json(object) {
        if (this.level <= Level.DEBUG) {
            console.info(JSON.stringify(object, null, 4));
        }
    }
    error(message) {
        console.error(this.buildMessage(message));
    }
    throwError(message) {
        console.error(this.buildMessage(message));
        throw new Error(this.buildMessage(message));
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocalLogger {
    error(error) {
        throw error;
    }
    throw(message) {
        new Error(message);
    }
    info(message) {
        console.info(message);
    }
    json(object, label) {
        if (label) {
            console.log(label);
        }
        console.log(JSON.stringify(object, null, 4));
    }
    log(message, label) {
        if (label) {
            console.log("--" + label + "--");
        }
        console.log(message);
    }
}
exports.LocalLogger = LocalLogger;

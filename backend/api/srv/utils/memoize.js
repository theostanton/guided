"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(invoke) {
    var t;
    return function () {
        if (!t) {
            t = invoke();
        }
        return t;
    };
}
exports.default = default_1;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(params, action) {
    return params.reduce(async (previousPromise, param, index) => {
        await previousPromise;
        return action(param, index);
    }, Promise.resolve());
}
exports.default = default_1;
//# sourceMappingURL=executeSequentially.js.map
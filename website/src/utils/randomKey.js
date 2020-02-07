"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __importStar(require("crypto"));
const BASE_62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
function default_1(length = 16) {
    let key = "";
    const charsLength = BASE_62.length;
    for (let i = 0; i < length; i++) {
        const rnBytes = crypto.randomBytes(2);
        const randomIndex = rnBytes.readUInt8(0) * 256 + rnBytes.readUInt8(1);
        key += BASE_62[randomIndex % charsLength];
    }
    return key;
}
exports.default = default_1;
;
//# sourceMappingURL=randomKey.js.map
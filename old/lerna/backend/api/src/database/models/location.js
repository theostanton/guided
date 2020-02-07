"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Google = __importStar(require("../../api/google"));
const helper_1 = require("../../api/google/helper");
const utils_1 = require("../utils");
async function generateLocationRow(lat, long, label = undefined) {
    const reverseGeocodeResult = await Google.reverseGeocode(lat, long);
    const topResult = reverseGeocodeResult.results[0];
    label = label || helper_1.extractLabel(topResult);
    const address = helper_1.extractAddress(topResult);
    return {
        id: utils_1.generateId('location'),
        ...address,
        label,
        lat,
        long,
        processed: true
    };
}
exports.generateLocationRow = generateLocationRow;
//# sourceMappingURL=location.js.map
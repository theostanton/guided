"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users = __importStar(require("./users"));
const Guides = __importStar(require("./guides"));
const Stays = __importStar(require("./stays"));
const Locations = __importStar(require("./locations"));
const Rides = __importStar(require("./rides"));
exports.default = {
    ...Users,
    ...Guides,
    ...Stays,
    ...Locations,
    ...Rides
};

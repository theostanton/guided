"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Guide_1 = __importDefault(require("./Guide"));
const Query_1 = __importDefault(require("./Query"));
const Stay_1 = __importDefault(require("./Stay"));
const Ride_1 = __importDefault(require("./Ride"));
const resolvers = {
    Query: Query_1.default,
    Guide: Guide_1.default,
    Stay: Stay_1.default,
    Ride: Ride_1.default
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map
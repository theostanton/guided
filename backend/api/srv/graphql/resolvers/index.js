"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Guide_1 = __importDefault(require("./Guide"));
var Query_1 = __importDefault(require("./Query"));
var Stay_1 = __importDefault(require("./Stay"));
var Ride_1 = __importDefault(require("./Ride"));
var resolvers = {
    Query: Query_1.default,
    Guide: Guide_1.default,
    Stay: Stay_1.default,
    Ride: Ride_1.default
};
exports.default = resolvers;

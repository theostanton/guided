"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserDao_1 = __importDefault(require("./UserDao"));
var LocationDao_1 = __importDefault(require("./LocationDao"));
var GuideDao_1 = __importDefault(require("./GuideDao"));
var RideDao_1 = __importDefault(require("./RideDao"));
var StayDao_1 = __importDefault(require("./StayDao"));
exports.default = {
    guide: new GuideDao_1.default(),
    location: new LocationDao_1.default(),
    ride: new RideDao_1.default(),
    stay: new StayDao_1.default(),
    user: new UserDao_1.default(),
};

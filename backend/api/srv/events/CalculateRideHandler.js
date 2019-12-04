"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var QueueHandler_1 = require("./QueueHandler");
var daos_1 = __importDefault(require("../database/daos"));
var Google = __importStar(require("../api/google"));
var executeSequentially_1 = __importDefault(require("../utils/executeSequentially"));
var index_1 = require("./index");
var CalculateRideHandler = (function (_super) {
    __extends(CalculateRideHandler, _super);
    function CalculateRideHandler() {
        return _super.call(this, 'calculate-ride') || this;
    }
    CalculateRideHandler.updateAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ids, handler, indices, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('updateAll');
                        return [4, daos_1.default.stay.ids()];
                    case 1:
                        ids = (_a.sent()).map(function (_a) {
                            var id = _a.id;
                            return id;
                        });
                        console.log('got ids', ids.length);
                        return [4, CalculateRideHandler.get()];
                    case 2:
                        handler = _a.sent();
                        return [4, handler.empty()];
                    case 3:
                        _a.sent();
                        indices = [];
                        for (i = 0; i < ids.length - 1; i++) {
                            indices.push([ids[i], ids[i + 1]]);
                        }
                        console.log(JSON.stringify(indices, null, 4));
                        return [4, executeSequentially_1.default(indices, function (_a) {
                                var i = _a[0], j = _a[1];
                                return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                console.log("index " + i + "," + j);
                                                return [4, index_1.calculateRide(i, j)];
                                            case 1:
                                                _b.sent();
                                                return [2];
                                        }
                                    });
                                });
                            })];
                    case 4:
                        _a.sent();
                        return [4, handler.resume()];
                    case 5:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CalculateRideHandler.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('get');
                        if (!!CalculateRideHandler.instance) return [3, 2];
                        console.log('init');
                        CalculateRideHandler.instance = new CalculateRideHandler();
                        return [4, CalculateRideHandler.instance.subscribe()];
                    case 1:
                        _a.sent();
                        console.log('subscribed');
                        _a.label = 2;
                    case 2: return [2, CalculateRideHandler.instance];
                }
            });
        });
    };
    CalculateRideHandler.prototype.handle = function (context, done) {
        return __awaiter(this, void 0, void 0, function () {
            var startStay, startLocation, endStay, endLocation, directions, route, rideRow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, daos_1.default.ride.deleteWhere({ start: context.startStayId, end: context.endStayId })];
                    case 1:
                        _a.sent();
                        return [4, daos_1.default.stay.findOne({ id: context.startStayId })];
                    case 2:
                        startStay = _a.sent();
                        return [4, daos_1.default.location.findOne({ id: startStay.id })];
                    case 3:
                        startLocation = _a.sent();
                        return [4, daos_1.default.stay.findOne({ id: context.endStayId })];
                    case 4:
                        endStay = _a.sent();
                        return [4, daos_1.default.location.findOne({ id: endStay.id })];
                    case 5:
                        endLocation = _a.sent();
                        return [4, Google.directions(startLocation.lat, startLocation.long, endLocation.lat, endLocation.long)];
                    case 6:
                        directions = _a.sent();
                        route = directions.routes[0];
                        rideRow = {
                            start: startStay.id,
                            end: endStay.id,
                            route: JSON.stringify(route, null, 4)
                        };
                        return [4, daos_1.default.ride.insert(rideRow)];
                    case 7:
                        _a.sent();
                        console.log('handled', context);
                        return [2];
                }
            });
        });
    };
    CalculateRideHandler.prototype.empty = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4, this.bull.empty()];
                    case 1:
                        _d.sent();
                        _b = (_a = console).log;
                        _c = "count after clear ";
                        return [4, this.bull.count()];
                    case 2:
                        _b.apply(_a, [_c + (_d.sent())]);
                        return [2];
                }
            });
        });
    };
    CalculateRideHandler.prototype.resume = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.bull.resume()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return CalculateRideHandler;
}(QueueHandler_1.QueueHandler));
exports.CalculateRideHandler = CalculateRideHandler;

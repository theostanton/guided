"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importStar(require("./index"));
var common_1 = require("@guided/common");
var DAO = (function () {
    function DAO() {
        this.logger = new common_1.Logger("DAO");
    }
    DAO.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, index_1.default().one("\n            SELECT *\n            FROM " + this.table + "\n            where id = $1\n        ", [id])];
            });
        });
    };
    DAO.prototype.getOptional = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, index_1.default().oneOrNone("\n            SELECT *\n            FROM " + this.table + "\n            where id = $1\n        ", [id])];
            });
        });
    };
    DAO.prototype.findOne = function (keyValues) {
        return __awaiter(this, void 0, void 0, function () {
            var where, query;
            return __generator(this, function (_a) {
                where = Object.keys(keyValues).map(function (key) {
                    return "\"" + key + "\"='" + keyValues[key] + "'";
                }).join(' and ');
                query = "\n            SELECT *\n            FROM " + this.table + "\n            where " + where + "\n        ";
                return [2, index_1.default().one(query)];
            });
        });
    };
    DAO.prototype.findMany = function (keyValues) {
        return __awaiter(this, void 0, void 0, function () {
            var where, query;
            return __generator(this, function (_a) {
                where = Object.keys(keyValues).map(function (key) {
                    return "\"" + key + "\"='" + keyValues[key] + "'";
                }).join(' and ');
                query = "\n            SELECT *\n            FROM " + this.table + "\n            where " + where + "\n        ";
                return [2, index_1.default().manyOrNone(query)];
            });
        });
    };
    DAO.prototype.deleteWhere = function (keyValues) {
        return __awaiter(this, void 0, void 0, function () {
            var where, query;
            return __generator(this, function (_a) {
                where = Object.keys(keyValues).map(function (key) {
                    var value = keyValues[key];
                    if (typeof value === 'boolean') {
                        return "\"" + key + "\"=" + keyValues[key];
                    }
                    else {
                        return "\"" + key + "\"='" + keyValues[key] + "'";
                    }
                }).join(' and ');
                query = "\n            DELETE FROM " + this.table + "\n            where " + where + "\n        ";
                this.logger.info("deleteWhere: " + query);
                return [2, index_1.default().none(query)];
            });
        });
    };
    DAO.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, index_1.default().manyOrNone("\n            SELECT *\n            FROM " + this.table + "\n        ")];
            });
        });
    };
    DAO.prototype.insert = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, index_1.insert(t, this.table)];
            });
        });
    };
    DAO.prototype.insertMany = function (ts) {
        return __awaiter(this, void 0, void 0, function () {
            var columns;
            return __generator(this, function (_a) {
                if (ts.length === 0) {
                    return [2];
                }
                columns = Object.keys(ts[0]);
                return [2, index_1.insertMany(ts, this.table, columns)];
            });
        });
    };
    DAO.prototype.update = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, index_1.update(t, this.table)];
            });
        });
    };
    return DAO;
}());
exports.DAO = DAO;

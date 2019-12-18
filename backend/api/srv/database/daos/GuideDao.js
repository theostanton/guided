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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DAO_1 = require("../DAO");
var index_1 = __importDefault(require("../index"));
var GuideDao = (function (_super) {
    __extends(GuideDao, _super);
    function GuideDao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.table = 'guides';
        return _this;
    }
    GuideDao.prototype.getFromSlug = function (slug) {
        var query = "\n            SELECT *\n            FROM " + this.table + "\n            where slug = $1\n        ";
        return index_1.default().one(query, [slug]);
    };
    return GuideDao;
}(DAO_1.DAO));
exports.default = GuideDao;

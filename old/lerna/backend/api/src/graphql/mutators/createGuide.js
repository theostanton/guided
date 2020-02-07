"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daos_1 = __importDefault(require("../../database/daos"));
const utils_1 = require("../../database/utils");
async function default_1(_, { userId, title }) {
    const slug = utils_1.generateSlug(title);
    return daos_1.default.guide.insert({
        id: utils_1.generateId('guide'),
        rideLimitMinutes: 420,
        startDate: new Date(),
        title,
        slug,
        user: userId
    });
}
exports.default = default_1;
//# sourceMappingURL=createGuide.js.map
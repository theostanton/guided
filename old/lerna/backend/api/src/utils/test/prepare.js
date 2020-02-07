"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importStar(require("../../database"));
const fs_1 = __importDefault(require("fs"));
async function wipe() {
    await database_1.default().none(`DROP SCHEMA test CASCADE`);
    await database_1.default().none(`CREATE SCHEMA test`);
    const query = fs_1.default.readFileSync('src/utils/generate.sql', 'utf-8');
    await database_1.default().none(query);
}
exports.wipe = wipe;
const USER_ID = 'user_1234';
const GUIDE_ID = 'guide_1234';
async function loadUser() {
    await database_1.daos.user.insert({
        id: USER_ID,
        email: 'test@test.com',
        username: 'testuser'
    });
}
exports.loadUser = loadUser;
async function loadGuide() {
    await database_1.daos.guide.insert({
        id: GUIDE_ID,
        rideLimitMinutes: 200,
        slug: 'test-guide',
        title: 'Test Guide',
        startDate: new Date(),
        user: USER_ID
    });
}
exports.loadGuide = loadGuide;
async function loadStays(...stays) {
}
exports.loadStays = loadStays;
//# sourceMappingURL=prepare.js.map
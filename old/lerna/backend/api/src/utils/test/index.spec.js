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
const index = __importStar(require("./prepare"));
const database_1 = __importDefault(require("../../database"));
const database_2 = require("../../database");
test('should wipe test schema', async () => {
    await index.prepare();
    const guides = await database_1.default().manyOrNone(`SELECT *
                                          from guides`);
    expect(guides.length).toBe(0);
    const stays = await database_2.daos.stay.getAll();
    expect(stays.length).toBe(0);
    const users = await database_2.daos.user.getAll();
    expect(users.length).toBe(0);
});

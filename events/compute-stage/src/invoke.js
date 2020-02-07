"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const send_1 = __importDefault(require("./send"));
async function execute() {
    console.log("execute");
    await send_1.default({
        someField: "Some value!!",
    });
}
execute();
//# sourceMappingURL=invoke.js.map
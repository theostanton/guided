"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_line_args_1 = __importDefault(require("command-line-args"));
const optionDefinitions = [
    { name: "command", defaultOption: true },
    { name: "stage", type: String, defaultValue: "local" },
    { name: "queue", alias: "q", type: String },
    { name: "body", alias: "b", type: String },
];
const options = command_line_args_1.default(optionDefinitions);
process.env.STAGE = options.stage;
require("@guided/envs");
const send_1 = __importDefault(require("./send"));
const create_1 = __importDefault(require("./create"));
const list_1 = __importDefault(require("./list"));
const listen_1 = __importDefault(require("./listen"));
exports.COMMANDS = {
    create: create_1.default, send: send_1.default, list: list_1.default, listen: listen_1.default,
};
async function execute() {
    await exports.COMMANDS[options.command](options);
}
execute().then();
//# sourceMappingURL=index.js.map